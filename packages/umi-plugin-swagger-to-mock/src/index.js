const { uniqBy, debounce } = require('lodash')
const chokidar = require('chokidar')
const globby = require('globby')
const os = require('os')
const path = require('path')

const createSwaggerDocs = require('./swaggerDocs')

function path2mock(path) {
  return `/mock/${path.replace(/^\//, '')}`
}
function getSwaggerSource(swaggerDocs) {
  if (swaggerDocs) {
    if (typeof swaggerDocs === 'string') {
      return { source: swaggerDocs, dataNode: 'default' }
    }
    if (typeof swaggerDocs === 'object') {
      if (/^http/i.test(swaggerDocs.source)) {
        return swaggerDocs
      }
      return Object.assign(swaggerDocs, {
        source: `${networkAddress}/${swaggerDocs.source}`,
      })
    }
  }
}
function getNetworkAddress() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const osAPI of interfaces[name]) {
      const { address, family, internal } = osAPI
      if (family === 'IPv4' && !internal) {
        return address || 'localhost'
      }
    }
  }
}
const port = process.env.PORT || 8001
const ip = getNetworkAddress()
const networkAddress = `http://${ip}:${port}`

module.exports = function(
  api,
  {
    swaggerOutputPath,
    swaggerPath,
    swaggerDocs,
    apiKeyRename = {},
    apiPathToMockPath = path2mock,
    formatData,
  } = {},
) {
  if (process.env.NODE_ENV === 'production') return

  const { cwd } = api
  const absSwaggerOutputPath = swaggerOutputPath || `${cwd}/src/shared/api`
  const absSwaggerPath = swaggerPath || `${cwd}/swagger`
  const jsonPath = `${absSwaggerPath}/json`
  const overridePath = `${absSwaggerPath}/override`
  let mergeLog = []
  let source = []
  if (swaggerDocs instanceof Array) {
    source = source.concat(swaggerDocs.map(docs => getSwaggerSource(docs)))
  } else if (typeof swaggerDocs === 'string') {
    const swaggerSource = getSwaggerSource(swaggerDocs)
    if (swaggerSource) source.push(swaggerSource)
  }

  let sourceLocal = globby.sync(jsonPath, {
    expandDirectories: {
      extensions: ['json'],
    },
  })

  sourceLocal = sourceLocal.map(json => {
    const source = path.basename(json)
    return getSwaggerSource({ source, dataNode: 'default' })
  })

  source = uniqBy(source.concat(sourceLocal), 'source')
  if (source.length) {
    console.log('Swagger json from:')
    source.forEach(({ source }) => console.log(source))
    console.log('')
  } else {
    console.log(
      `You should config swagger json source \'swaggerDocs\' in .umirc.js,
see: https://github.com/Leonard-Li777/swagger-to-umi-mock-server`,
    )
    process.exit(1)
  }
  api.addMiddlewareAhead(() => require('serve-static')(jsonPath))

  api.afterDevServer(() => {
    const watcher = chokidar.watch([overridePath, jsonPath])
    watcher.on(
      'all',
      debounce(
        () =>
          source.length
            ? createSwaggerDocs({
                cwd,
                source,
                absSwaggerPath,
                absSwaggerOutputPath,
                apiKeyRename,
                apiPathToMockPath,
                formatData,
              }).then(log => {
                mergeLog = log
              })
            : console.log(
                `You should config swagger json source \'swaggerDocs\' in .umirc.js,
see: https://github.com/Leonard-Li777/swagger-to-umi-mock-server`,
              ),
        100,
      ),
    )
  })
  api.onDevCompileDone(() => {
    console.log(
      '-----Start watching the following directories for Swagger api build!------',
    )
    console.log('')
    console.log(overridePath)
    console.log(jsonPath)
    console.log('')
    if (mergeLog.length) {
      console.log('merge data to as follows api key:')
      console.log(mergeLog.join('\n'))
      console.log('')
    }
    console.log('https://github.com/Leonard-Li777/swagger-to-umi-mock-server')
  })
}
