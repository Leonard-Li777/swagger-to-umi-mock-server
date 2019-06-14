module.exports = {
  port: 3001,
  overridePath: require.resolve('swaggerOverride'),
  rename: {
    appList: '/queries/client/app/list',
    pay: '/command/client/pay',
    payCheck: '/command/client/pay/check', // 聚合支付状态轮训检查接口
    payConfirm: '/command/client/pay/confirm', // 聚合支付确认接口
    payRequest: '/command/client/pay/request', // 聚合支付请求接口
    payRequestWap: '/command/client/pay/requestWap', // 聚合支付请求接口
    payRevoke: '/command/client/pay/revoke', // 撤销聚合支付接口
    bill: '/mrest/EnterpriseWelfare/EnterpriseWelfare/100000/mobileHome/getBill', // 获取账单
    pointsDetails: '/mrest/EnterpriseWelfare/EnterpriseWelfare/100000/mobileHome/getPointsDetails', // 获取积分详情
    pointsType: '/mrest/EnterpriseWelfare/EnterpriseWelfare/100000/mobileHome/getPointsType', // 获取积分类型
    asset: '/mrest/EnterpriseWelfare/EnterpriseWelfare/100000/mobileHome/getAsset', // 获取个人资产
  },
  pathToMockPath: function path2mock(path) {
    return /^\/mrest/.test(path)
      ? path.replace('/mrest/EnterpriseWelfare/EnterpriseWelfare/100000/', '/mock/dotNet/')
      : `/mock/java${path}`;
  },
};
