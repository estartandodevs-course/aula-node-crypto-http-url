const https = require("https");
const url = require("url");

const parseUrl = url.parse("https://viacep.com.br/ws/22775036/json/");

const options = {
  hostname: parseUrl.hostname,
  port: parseUrl.port,
  path: parseUrl.path,
  method: "GET",
};

const request = https.request(options, function (res) {
  console.log(res.statusCode);
  res.on("data", function (chunk) {
    console.log(chunk.toString());
  });
});

request.end();
