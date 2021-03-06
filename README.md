# keyv-mongo-native [<img width="100" align="right" src="https://rawgit.com/lukechilds/keyv/master/media/logo.svg" alt="keyv">](https://github.com/lukechilds/keyv)

> MongoDB Native storage adapter for Keyv

[![Build Status](https://travis-ci.com/RatserX/keyv-mongo-native.svg?token=Az56pmx34zmn4Ap6pZAz&branch=master)](https://travis-ci.com/RatserX/keyv-mongo-native)
[![Coverage Status](https://coveralls.io/repos/github/RatserX/keyv-mongo-native/badge.svg?branch=master)](https://coveralls.io/github/RatserX/keyv-mongo-native?branch=master)
[![Dependencies Status](https://david-dm.org/RatserX/keyv-mongo-native.svg?branch=master)](https://david-dm.org/RatserX/keyv-mongo-native)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg)](https://www.buymeacoffee.com/Ratser)

MongoDB Native storage adapter for [Keyv](https://github.com/lukechilds/keyv). This adapter uses the native MongoDB Node.js Driver instead of any third-party library.

Uses TTL indexes to automatically remove expired documents. However [MongoDB doesn't guarantee data will be deleted immediately upon expiration](https://docs.mongodb.com/manual/core/index-ttl/#timing-of-the-delete-operation), so expiry dates are revalidated in Keyv.

## Install

```shell
npm install --save keyv keyv-mongo-native
```

## Usage

```js
const Keyv = require('keyv');

const keyv = new Keyv({ store: new KeyvMongoNative('mongodb://user:pass@localhost:27017/dbname') });
keyv.on('error', handleConnectionError);
```

## License

MIT © RatserX
