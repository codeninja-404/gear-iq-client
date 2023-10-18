import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Component/Page/Home";
import AddProducts from "./Component/Page/AddProducts";
import MyCart from "./Component/Page/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/cart",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);
