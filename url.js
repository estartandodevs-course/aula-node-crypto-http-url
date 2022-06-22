const url = require("url");

const myUrl =
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";
const urlParsed = url.parse(myUrl);

// results:

console.log("protocol: ", urlParsed.protocol); // https:
console.log("auth: ", urlParsed.auth); // user:pass
console.log("host: ", urlParsed.host); // sub.example.com:8080
console.log("port: ", urlParsed.port); // 8080
console.log("hostname: ", urlParsed.hostname); // sub.example.com
console.log("hash: ", urlParsed.hash); // #hash
console.log("search: ", urlParsed.search); // ?query=string
console.log("query: ", urlParsed.query); // query=string
console.log("path: ", urlParsed.path); // /p/a/t/h?query=string
