const { uniq } = require('lodash');
module.exports = uniq([
  // 在以下列表的API会走Mock服务器, 来源参考动态更新的 ./keyList.js
  // 注释掉指定API，将走线上
  'appList', // 查询应用列表
  'checkstand', // 获取收银台信息
  'list', // 查询企业资产
]);
