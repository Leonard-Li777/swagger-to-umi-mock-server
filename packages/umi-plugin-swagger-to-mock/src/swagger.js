const swaggerParserMock = require('swagger-parser-mock')

const defaultFormatData = data => {
  return {
    code: 200,
    message: '成功',
    data,
  }
}

module.exports = (source, formatData = defaultFormatData) =>
  source.map(async ({ dataNode = 'default', source }) => {
    const docs = await swaggerParserMock(source).then(docs =>
      Object.keys(docs.paths).map(path => {
        // return Object.entries(docs.paths[path])[0][1].responses['200']
        const [
          method,
          {
            summary,
            responses: {
              [dataNode]: { example: exampleDataNode } = {},
              default: { example } = {},
              200: { example: example200 } = {},
            },
          },
        ] = Object.entries(docs.paths[path])[0]

        let data = JSON.parse(exampleDataNode || example || example200 || '{}')
        data = formatData(data, { dataNode, source, path })

        return {
          path,
          method,
          summary,
          data,
        }
      }),
    )
    return docs
  })
