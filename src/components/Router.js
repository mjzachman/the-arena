import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Articles from "./Articles";
import About from "./About";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
        path: "articles",
        element: <Articles />,
      },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;