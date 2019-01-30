# egg-elasticsearch

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-elasticsearch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-elasticsearch
[travis-image]: https://img.shields.io/travis/thonatos/egg-elasticsearch.svg?style=flat-square
[travis-url]: https://travis-ci.org/thonatos/egg-elasticsearch
[codecov-image]: https://img.shields.io/codecov/c/github/thonatos/egg-elasticsearch.svg?style=flat-square
[codecov-url]: https://codecov.io/github/thonatos/egg-elasticsearch?branch=master
[david-image]: https://img.shields.io/david/thonatos/egg-elasticsearch.svg?style=flat-square
[david-url]: https://david-dm.org/thonatos/egg-elasticsearch
[snyk-image]: https://snyk.io/test/npm/egg-elasticsearch/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-elasticsearch
[download-image]: https://img.shields.io/npm/dm/egg-elasticsearch.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-elasticsearch

<!--
Description here.
-->

egg plugin for [elasticsearch](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html)

## Install

```bash
$ npm i egg-elasticsearch2 --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.elasticsearch2 = {
  enable: true,
  package: 'egg-elasticsearch2',
};
```

## Configuration
#### 单实例

```js
// {app_root}/config/config.default.js
exports.elasticsearch = {
  host: 'host:port',
  // more options: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/configuration.html
};
```

#### 多实例
```js
exports.elasticsearch = {
  clients: {
    es1: {
      host: 'host1:port',
    },
    es2: {
      host: 'host2:port',
    }
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```js
'use strict';

module.exports = app => {
  app.get('/', function* () {
    try {
      const result = yield app.elasticsearch.search();
      this.body = result;
    } catch (error) {
      this.status = 500;
      this.body = error;
    }
  });
};
```
<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
