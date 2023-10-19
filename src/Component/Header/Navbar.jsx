import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const link = (
    <>
      <li className="my-1 text-yellow-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="my-1 text-yellow-400">
        <NavLink to="/add">Add Products</NavLink>
      </li>
      <li className="my-1 text-yellow-400">
        <NavLink to="/cart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed text-white z-40 bg-white bg-opacity-30 top-0 left-0 right-0">
      <div className="navbar container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-sm lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-yellow-400 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-30 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          
          <div className="">
            <div className="w-36 ">
              <img
              className="rounded-full"
                src={logo}
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-2 text-white  menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-400 text-white hover:text-black btn-sm">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
