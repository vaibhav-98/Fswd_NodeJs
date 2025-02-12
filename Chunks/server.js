const http = require("http");

let userContent = "Default content. Type somthing here ";

process.stdin.on("data", (data) => {
  userContent = data.toString().trim();
  console.log(`Content updated: ${userContent}`);
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Server Response: ${userContent}`);
});

const PORT = 3030;

server.listen(PORT, () => {
  console.log(`SERver runnung at http://localhost:${PORT}`);
  console.log("Type in the terminal to change content ");
});
