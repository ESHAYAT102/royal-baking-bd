import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import BlogListPage from "../pages/BlogListPage.jsx";
import BlogPostPage from "../pages/BlogPostPage.jsx";
import Menu from "../pages/Menu.jsx";
import NotFound from "../pages/NotFound.jsx";

export const routes = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: BlogListPage },
      { path: "blog/:slug", Component: BlogPostPage },
      { path: "menu", Component: Menu },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
];
