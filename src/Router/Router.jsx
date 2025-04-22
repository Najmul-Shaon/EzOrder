import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "./Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/products",

        element: <Home />,
      },
    ],
  },
]);
