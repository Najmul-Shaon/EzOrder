import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Components/ProductDetails";
import OrderForm from "../Pages/Order/OrderForm";

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
        element: <Products />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/product/order",
        element: <OrderForm />,
      },
    ],
  },
]);
