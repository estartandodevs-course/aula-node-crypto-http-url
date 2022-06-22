const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (request, response) {
  console.log("request url", request.url);
  console.log("request body", request.body);

  const values = request.url.split("/")[1].split("+");

  response.setHeader("Content-Type", "text/html");
  response.writeHead(200);
  response.end(
    `<html><body><h1>Meu Servidor! ${
      Number(values[0]) + Number(values[1])
    } </h1></body></html>`
  );
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
