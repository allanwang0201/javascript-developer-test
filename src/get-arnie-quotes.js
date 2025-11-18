const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const responses = await Promise.all(urls.map(httpGet));
  return responses.map(({ status, body }) => {
    const { message } = JSON.parse(body);
    return status === 200 ? { 'Arnie Quote': message } : { FAILURE: message };
  });
};

module.exports = {
  getArnieQuotes,
};
