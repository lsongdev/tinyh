
const buildForm = body => {
  const output = [];
  const uuid = (Date.now() + (Math.random() * 1e8 | 0)).toString(36);
  const boundary = `----WebKitFormBoundary${uuid}`;
  for (const key of Object.keys(body)) {
    const value = body[key];
    output.push("--" + boundary);
    output.push(`Content-Disposition: form-data; name="${key}"`);
    output.push('');
    output.push(value);
  }
  output.push('--' + boundary + '--');
  output.push('');
  const payload = output.join('\r\n');
  return { boundary, payload };
};


module.exports = {
  buildForm,
};