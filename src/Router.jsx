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
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://gear-iq-server-eyyubjt7l-saidul-arefins-projects.vercel.app/brands"
          ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gear-iq-server-eyyubjt7l-saidul-arefins-projects.vercel.app/cars/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gear-iq-server-eyyubjt7l-saidul-arefins-projects.vercel.app/cars/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://gear-iq-server-eyyubjt7l-saidul-arefins-projects.vercel.app/cart"
          ),
      },
      {
        path: "/products/:brandName",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            "https://gear-iq-server-eyyubjt7l-saidul-arefins-projects.vercel.app/cars"
          ),
      },
    ],
  },
]);
