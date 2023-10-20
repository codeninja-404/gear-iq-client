import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
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
    <div className="fixed text-white z-40 bg-black bg-opacity-70 top-0 left-0 right-0">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-70 rounded-box w-52"
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
          {user ? (
            <>
              {" "}
              <div className="  flex items-center p-1">
                <div className="avatar pr-2">
                  <div className=" w-6 md:w-8 rounded-full ring-4 ring-green-500 ring-offset-base-100 ring-offset-1">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <p className="text-white text-xs md:text-xl">
                  {user.displayName}
                </p>
              </div>
              <Link
                onClick={() => logOut()}
                to="/"
                className="btn text-white bg-gray-500 border-red-500  hover:text-red-500 hover:bg-black  btn-xs md:btn-sm"
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-gray-500  text-white border-green-500 hover:text-green-500 hover:bg-black btn-sm"
            >
              Log In
            </Link>
          )}
          <input
            type="checkbox"
            onClick={handleThemeSwitch}
            className="toggle ml-2 toggle-error"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
