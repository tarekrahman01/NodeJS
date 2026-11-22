import type { IncomingMessage, ServerResponse } from "http";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/product" && method === "GET") {
    const product = [
      {
        id: 1,
        name: "Product-1",
        price: 30
      }
    ]
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "This is products route!!" }));
  }
};

export default productController;
