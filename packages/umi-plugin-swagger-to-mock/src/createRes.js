const mockjs = require('mockjs');

const createRes = ([data, delay]) => (req, res) => {
  res.statusCode = 200;
  res.statusText = 'statusText error';
  const { method, body, originalUrl } = req;
  console.log({ method, body, originalUrl }); // eslint-disable-line

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  setTimeout(() => res.end(JSON.stringify(mockjs.mock(data))), delay);
};
module.exports = createRes;
