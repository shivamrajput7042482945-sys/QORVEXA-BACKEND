const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/health") {
    res.writeHead(200);
    res.end(JSON.stringify({
      status: "online",
      project: "QORVEXA AI"
    }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: "Route not found"
  }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`QORVEXA backend running on port ${PORT}`);
});
