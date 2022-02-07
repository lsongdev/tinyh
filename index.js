const http = require('http');
const https = require('https');
const assert = require('assert');
const Stream = require('stream');

const request = (method, url, payload, headers) => {
  const client = url.startsWith('https://') ? https : http;
  return new Promise((resolve, reject) => {
    const req = client.request(url, {
      method,
      headers,
    }, resolve);
    req.once('error', reject);
    if (payload instanceof Stream) {
      payload.pipe(req);
    } else {
      req.end(payload);
    }
  });
};

const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

const ensureStatusCode = expected => {
  if (!Array.isArray(expected))
    expected = [expected];
  return res => {
    const { statusCode } = res;
    assert.ok(expected.includes(statusCode), `status code must be "${expected}" but actually "${statusCode}"`);
    return res;
  };
};

const get = (url, headers) =>
  request('get', url, '', headers);

const post = (url, payload, headers) =>
  request('post', url, payload, headers);

const getJSON = (url, headers) =>
  Promise
    .resolve()
    .then(() => get(url, headers))
    .then(readStream)
    .then(JSON.parse);


const postJSON = (url, payload, headers) =>
  Promise
    .resolve()
    .then(() => post(url, JSON.stringify(payload), headers))
    .then(readStream)

module.exports = {
  request,
  get,
  post,
  readStream,
  ensureStatusCode,
  getJSON,
  postJSON,
};