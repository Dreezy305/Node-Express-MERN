const http = require("http");

const server = http.createServer((res, req) => {
  res.write("Welcome to our home page");
  res.end();
});

server.listen(5000);
