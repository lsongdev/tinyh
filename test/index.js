const test = require('./test');
const { get, post, ensureStatusCode } = require('..');

(async () => {

  await test('tiny-network#get', async () => {
    const res = await get('https://httpbin.org/get');
    ensureStatusCode(200)(res);
  });

  await test('tiny-network#post', async () => {
    const res = await post('https://httpbin.org/post');
    ensureStatusCode(200)(res);
  });

})();