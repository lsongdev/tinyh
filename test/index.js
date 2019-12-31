const test = require('./test');
const { get } = require('..');

(async () => {

  await test('tiny-network#get', async () => {
    await get('https://httpbin.org/get');
  });

  await test('tiny-network#post', async () => {
    await get('https://httpbin.org/post');
  });

})();