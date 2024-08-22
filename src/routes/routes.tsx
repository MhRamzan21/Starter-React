import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import DefaultLayout from "layouts/DefaultLayout";
import Home from "views/Home";
import About from "views/About";
import Content from "views/Content";

const routes = createBrowserRouter([
  {
    path: paths.root,
    element: <DefaultLayout />,
    children: [
      {
        path: paths.root,
        element: <Home />,
      },
      {
        path: paths.content,
        element: <Content />
      },
      {
        path: paths.about,
        element: <About />
      }
    ],
  },
]);

export default routes;
