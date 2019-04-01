'use strict';

const assert = require('assert');
const elasticsearch = require('elasticsearch');
let count = 0;
const createOneClient = (config, app) => {
  const { host } = config;
  // check key & secret
  assert(host, '[egg-elasticsearch] host is required.');
  const client = new elasticsearch.Client(config);

  app.beforeStart(async () => {
    const index = count++;
    try {
      await client.ping({ requestTimeout: 1000 });
      app.coreLogger.info(`[egg-elasticsearch] instance[${index}] status Ok.`);
    } catch (error) {
      app.coreLogger.error('[egg-elasticsearch] elasticsearch cluster is down with error: ', error);
      throw error;
    }
  });
  return client;
};

module.exports = app => {
  app.addSingleton('elasticsearch', createOneClient);
};
