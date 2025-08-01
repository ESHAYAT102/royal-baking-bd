import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import BlogListPage from "../pages/BlogListPage.jsx";
import BlogPostPage from "../pages/BlogPostPage.jsx";
import Menu from "../pages/Menu.jsx";
import Courses from "../pages/Courses.jsx";
import CourseDetails from "../pages/CourseDetails.jsx";
import Ebooks from "../pages/Ebooks.jsx";
import EbookDetails from "../pages/EbookDetails.jsx";
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
      { path: "courses", Component: Courses },
      { path: "courses/:id", Component: CourseDetails },
      { path: "ebooks", Component: Ebooks },
      { path: "ebooks/:id", Component: EbookDetails },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
];
