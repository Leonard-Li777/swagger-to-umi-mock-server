const path = require('path');
module.exports = {
  plugins: [
    [
      'umi-plugin-swagger-to-mock',
      {
        swaggerOutputPath: path.join(__dirname, 'src/shared/api'),
        swaggerPath: path.join(__dirname, 'swagger'),
        swaggerDocs: [
          { source: 'http://swapi.italent-inc.cn/v2/api-docs', dataNode: '200' }, // dataNodeName: default | 200
          { source: 'swagger.net.json', dataNode: 'default' },
          //{source:'swagger.java.json', dataNodeName:'200'},
        ],
        formatData: (data, { source }) => {
          const findData = data =>
            Object.keys(data).reduce((ret, key) => {
              if (data[key] && data[key].code) {
                data[key].code = 200;
                return data[key];
              }
            }, {});
          let result = data;
          if (/\.net/.test(source)) {
            result = findData(data);
          } else {
            result = {
              code: 200,
              message: '成功',
              data,
            };
          }
          return result;
        },
      },
    ],
  ],
};
