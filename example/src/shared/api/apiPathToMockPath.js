module.exports = function(path) {
  return /^\/mrest/.test(path)
    ? path.replace('/mrest/EnterpriseWelfare/EnterpriseWelfare/100000/', '/mock/dotNet/')
    : `/mock/java${path}`;
};
