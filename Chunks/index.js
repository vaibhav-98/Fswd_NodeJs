const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/data") {

    const filePath = path.join(__dirname, "data.txt");

    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });

    const readStram = fs.createReadStream(filePath, { encoding: "utf8" });

    readStram.pipe(res);

    readStram.on("error", (err) => {
      console.log("Error reading file :", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal server Error");
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(` Server is running on http://localhost: ${PORT}`);
});
