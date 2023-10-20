import { Outlet } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";
import { Toaster } from "react-hot-toast";

const LayOut = () => {
  return (
    <div className="dark:bg-black ">
      <Toaster />
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
