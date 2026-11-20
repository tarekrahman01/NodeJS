import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      //   console.log("This is root route");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is root route!!" }));
    } 
    else if (url?.startsWith("/products")) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is products route!!" }));
    } 
    else if (url?.startsWith("/cat")) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "This is cat route!!" }));
    } 
    else {
      //   console.log("this route is not defined");
      res.writeHead(404, { "content-type": "text/plain" });
      res.end(JSON.stringify({ message: "This is not root route!!" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is running!!!!");
});
