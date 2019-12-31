## tiny-network

> super tiny http library

[![Build Status](https://travis-ci.org/song940/tiny-network.svg?branch=master)](https://travis-ci.org/song940/tiny-network)

### Installation

```bash
$ npm install tiny-network
```

### Example

```js
const { get, readStream } = require('tiny-network');

Promise
.resolve()
.then(() => get('https://httpbin.org/get'))
.then(ensureStatusCode(200))
.then(readStream)
.then(JSON.parse)
.then(response => {
  console.log(response);
});
```

Async/Await

```js
const { get, readStream } = require('tiny-network');

(async () => {

  const response = await get('https://httpbin.org/get');
  console.log(response.statusCode);

  const body = await readStream(response);
  console.log(JSON.parse(body));

})();
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---