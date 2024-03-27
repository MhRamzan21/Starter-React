import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import DefaultLayout from "layouts/DefaultLayout";
import Home from "views/Home";

const routes = createBrowserRouter([
  {
    path: paths.root,
    element: <DefaultLayout />,
    children: [
      {
        path: paths.root,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
