const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
  res.setHeader("Content-Type", "text/html");

  let view = "./frontend/";
  switch (req.url) {
    case "/":
      view += "Home.html";
      break;

    case "/about":
      view += "about.html";
      break;

    case "/contact":
      view += "contact.html";
      break;
    case "/home":
      view += "Home.html";
      break;

    default:
      view += "Home.html";
      break;
  }
  fs.readFile(view, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server started on port 3000");
});
