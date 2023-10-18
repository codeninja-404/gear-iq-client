import { Outlet } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";

const LayOut = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
