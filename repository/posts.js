const fetch = require('node-fetch');

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await res.json();
  return json;
};

module.exports = {
  getPosts,
};
