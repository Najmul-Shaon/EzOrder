import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h3 className="mt-24">This is the home</h3>,
      },
    ],
  },
]);
