// umi-plugin-swagger-to-mock:
// this file shared mock-server between webpack
const mock = require('./mock');
const apiMap = require('./apiMap');
const apiRename = require('./apiRename');

function path2mockDefault(path) {
  return `/mock/${path.replace(/^\//, '')}`;
}

module.exports = (({ mock, apiMap, apiRename, apiPathToMockPath = path2mockDefault }) => {
  const api = Object.assign(apiMap, apiRename);
  let apiKeys = [];

  try {
    // 开发情况下，指定api转mock路径
    if (window && mock.length) {
      apiKeys = mock;
    }
  } catch (e) {
    // Mock服务器获取全部api转mock路径
    apiKeys = Object.keys(api);
  }

  apiKeys.forEach(key => {
    // api转mock路径
    api[key] = apiPathToMockPath(api[key]);
  });
  return api;
})({ mock, apiMap, apiRename, apiPathToMockPath: require('./apiPathToMockPath.js') });
