import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("categories/:id", "routes/categoryPage.tsx"),
  route("catalog/", "routes/catalog.tsx"),
  route("products/:id", "routes/productPage.tsx"),
  route("catalog/:categoryName", "routes/catalogOnCategory.tsx"),
  route("cart", "routes/cartRoute.tsx"),
  route("signup", "routes/signup.tsx"),
  route("login", "routes/login.tsx"),
] satisfies RouteConfig;
