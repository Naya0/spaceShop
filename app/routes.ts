import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("products/:id", "routes/productPage.tsx"),
  route("cart", "routes/cartRoute.tsx"),

  route("login", "routes/auth/login.tsx"),
  route("signup", "routes/auth/signup.tsx"),
  route("panel", "routes/auth/panel.tsx"),

  ...prefix("categories", [
    index("routes/catalogCategories.tsx"),
    route("categories/:id", "routes/categoryPage.tsx"),/*не используется */
  ]),

  ...prefix("catalog", [
    index("routes/catalog.tsx"),
    route(":categoryName", "routes/catalogOnCategory.tsx"),
  ]),
] satisfies RouteConfig;
