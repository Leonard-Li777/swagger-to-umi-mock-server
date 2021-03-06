const path = require('path')
module.exports = {
  plugins: [
    [
      'umi-plugin-swagger-to-mock',
      {
        swaggerOutputPath: path.join(__dirname, 'src/shared/api'),
        swaggerPath: path.join(__dirname, 'swagger'),
        swaggerDocs: [
          { source: 'swagger.net.json', dataNode: '200' }, // 想要指定swagger/json/  swagger.net.json的dataNode为 200
        ],
        formatData: (data, { source, dataNode, path }) => {
          // 可省略，默认转换为{code: 200,   message: '成功', data}
          return {
            code: 200,
            message: '成功',
            data,
          }
        },
      },
    ],
  ],
}
