import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("categories/:id", "routes/categoryPage.tsx"),
  route("catalog/", "routes/catalog.tsx"),
  route("products/:id", "routes/productPage.tsx"),
  route("cart", "routes/Cart.tsx"),
] satisfies RouteConfig;
