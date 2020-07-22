const { join } = require('path')
const {
  merge,
  cloneDeep,
  invert,
  compact,
  flatten,
  camelCase,
} = require('lodash')
const fs = require('fs-extra')
const globby = require('globby')
const Mustache = require('mustache')

const docs = require('./swagger')

const api = async ({
  cwd,
  source,
  absSwaggerOutputPath,
  absSwaggerPath,
  formatData,
}) => {
  const log = []
  const override = globby
    .sync(`${absSwaggerPath}/override/`, {
      expandDirectories: {
        extensions: ['js'],
      },
    })
    .map(path => {
      delete require.cache[require.resolve(path)]
      return require(path)
    })
    .reduce((ret, item) => ({ ...ret, ...item }), {})

  const apiRename = `${absSwaggerOutputPath}/apiRename.js`
  let apiKeyRename = {}
  if (fs.existsSync(apiRename)) {
    delete require.cache[require.resolve(apiRename)]
    apiKeyRename = require(apiRename)
  }

  const apiKey = invert(apiKeyRename)

  const apiItem = await Promise.all(docs(source, formatData)).then(api =>
    compact(flatten(api)).reduce(
      (ret, { path, method, summary, data }) => {
        const key =
          apiKey[path] ||
          camelCase(
            path
              .replace(
                /.*\/([a-zA-Z]\w+)\/([a-zA-Z]\w+)(\/\{(\w+)\})*$/g,
                '$1_$2_by_$4',
              )
              .replace(/_by_$/, ''),
          )
        const methodKey = `${method.toLowerCase()} \$\{api.${key}\}`

        const [overData, overDelay = 0] = override[key] || []

        overData && log.push(key) // 'merge data to: key',

        ret.keyPathMap += `  ${key}: '${path.replace(
          /(\/\{\w+\})*$/g,
          '',
        )}', // ${summary} ${path}
`
        ret.keyList += `  '${key}', // ${summary} ${path}
`
        ret.swaggerApi += `[\`${methodKey}\`]:createRes([ // ${summary} ${path}
  ${JSON.stringify(
    overData ? merge(cloneDeep(data), overData) : data,
    null,
    '\t',
  )},
  ${overDelay}
]),
`
        return ret
      },
      { swaggerApi: '', keyPathMap: '', keyList: '' },
    ),
  )
  const swaggerApiFileData = `/* eslint-disable */
const createRes = require('umi-plugin-swagger-to-mock/lib/createRes')
const api = require('${absSwaggerOutputPath}/index.node.js')

module.exports = {
  ${apiItem.swaggerApi}
}`

  const keyPathMapFileData = `/* eslint-disable */
module.exports = {
${apiItem.keyPathMap}
}`

  const keyListFileData = `/* eslint-disable */
module.exports = [
${apiItem.keyList}
]`
  fs.outputFileSync(`${cwd}/mock/swagger.js`, swaggerApiFileData, 'utf-8')

  fs.outputFileSync(
    `${absSwaggerOutputPath}/apiMap.js`,
    keyPathMapFileData,
    'utf-8',
  )

  fs.outputFileSync(
    `${absSwaggerOutputPath}/apiList.js`,
    keyListFileData,
    'utf-8',
  )

  function genApiIndex(fileName) {
    const data = {
      apiPathToMockPath: fs.existsSync(
        `${absSwaggerOutputPath}/apiPathToMockPath.js`,
      ),
      apiRename: fs.existsSync(`${absSwaggerOutputPath}/apiRename.js`),
      mock: fs.existsSync(`${absSwaggerOutputPath}/mock.js`),
    }
    const indexTpl = fs.readFileSync(
      join(__dirname, `../template/${fileName}.tpl`),
      'utf-8',
    )
    const indexContent = Mustache.render(indexTpl, data)
    const index = `${absSwaggerOutputPath}/${fileName}`
    fs.outputFileSync(index, indexContent, 'utf-8')
  }
  genApiIndex('index.js')
  genApiIndex('index.node.js')

  return log
}

module.exports = api
