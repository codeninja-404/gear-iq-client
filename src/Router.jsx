import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Component/Page/Home";
import AddProducts from "./Component/Page/AddProducts";
import MyCart from "./Component/Page/MyCart";
import Products from "./Component/Page/Products";
import UpdateProduct from "./Component/Page/UpdateProduct";
import Details from "./Component/Page/Cards/Details";
import Error from "./Component/Page/Error";
import Login from "./Component/Page/Login";
import Register from "./Component/Page/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/add",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/products/:brandName",
        element: <Products></Products>,
        loader: ({ params }) => fetch("http://localhost:5000/cars"),
      },
    ],
  },
]);
