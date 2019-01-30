'use strict';

const assert = require('assert');
const elasticsearch = require('elasticsearch');
let count = 0;
const createOneClient = (config, app) => {
  const { host } = config;
  // check key & secret
  assert(host, '[egg-elasticsearch] host is required.');
  const client = new elasticsearch.Client(config);
  app.beforeStart(function* () {
    const index = count++;
    yield client.ping({
      // ping usually has a 3000ms timeout
      requestTimeout: 1000,
    }, function(error) {
      if (error) {
        app
          .coreLogger
          .trace('elasticsearch cluster is down!');
      } else {
        app
          .coreLogger
          .info(`[egg-elasticsearch] instance[${index}] status Ok.`);
      }
    });
  });
  return client;
};

module.exports = app => {
  app.addSingleton('elasticsearch', createOneClient);
};
