import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from "../types/product";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  // console.log(url);  -> /products/1 -> []
  const urlParams = url?.split("/");
  // console.log(urlParams); ["","products","1"]
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
  // console.log(id);
  // Get All Product
  if (url === "/products" && method === "GET") {
    const products = productService();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrived successfully!",
        data: products,
      }),
    );
  } else if (method === "GET" && id != null) {
    const products = productService(); // [{}, {}, {}]
    const product = products.find((p: IProduct) => p.id === id);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Products retrived successfully!?",
        data: product,
      }),
    );
  }
};

export default productController;
