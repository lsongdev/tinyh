## tinyh

> super tiny http library

[![Build Status](https://travis-ci.org/song940/tinyh.svg?branch=master)](https://travis-ci.org/song940/tinyh)

### Installation

```bash
$ npm install tinyh
```

### Example

```js
const { get, readStream } = require('tinyh');

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
const { get, readStream } = require('tinyh');

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