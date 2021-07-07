const configs = {
  development: {
    SERVER_URI: "http://localhost:5000",
  },
  production: {
    SERVER_URI: `${process.env.API_HOST}:${process.env.API_PORT}`,
  },
};

module.exports.config = configs[process.env.NODE_ENV];