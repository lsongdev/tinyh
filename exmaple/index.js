const { get, readStream, tcp } = require('..');

// Promise
// .resolve()
// .then(() => get('https://httpbin.org/get'))
// .then(readStream)
// .then(JSON.parse)
// .then(response => {
//   console.log(response);
// });

(async () => {

  // const response = await get('https://httpbin.org/get');
  // console.log(response.statusCode);

  // const body = await readStream(response);
  // console.log(JSON.parse(body));

  const ssh = await tcp('lsong.me', 22);
  ssh.on('end', () => {
    console.log('Bye!');
  })
  ssh.on('data', buf => {
    console.log(buf.toString());
  });
  ssh.write('hello\n');

})();