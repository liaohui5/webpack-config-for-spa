import checkLogin from "@/router/checkLogin";
import Layout from "@/pages/layout";
import Home from "@/pages/home";
import About from "@/pages/about";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // 默认首页
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        middleware: [checkLogin],
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <div>path not matched</div>,
  },
];

export default routes;
