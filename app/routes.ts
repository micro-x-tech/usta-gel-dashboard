import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/index.tsx"),
  layout("./components/templates/mainLayout.tsx", [
    route("/dashboard", "./routes/main/dashboard.tsx"),

    ...prefix("craftsman", [
      index("./routes/main/allCraftsman.tsx"),
      route("approval", "./routes/main/craftsmanApproval.tsx"),
      route(":craftsmanId", "./routes/main/craftsman.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
