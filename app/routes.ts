import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:name", "routes/productPage.tsx"),
] satisfies RouteConfig;
