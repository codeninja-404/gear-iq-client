import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { logIn, logInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User Logged In successful!");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const handleGoogleLogIn = () => {
    logInGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("User Logged In successful!");
      })
      .catch((err) => toast.error("Log In failed!"));
  };

  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="hero-content mx-auto flex-col ">
          <h1 className="text-4xl dark:text-white text-center font-bold uppercase text-black">
            Please LogIn first!
          </h1>
          <div className="  w-full max-w-lg  border rounded-xl  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="User Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn  bg-blue-950 text-white hover:text-black"
                  type="submit"
                >
                  LOG IN
                </button>
                <Link
                  onClick={handleGoogleLogIn}
                  className="flex items-center btn my-2 bg-blue-950 text-white hover:text-black"
                >
                  <FcGoogle></FcGoogle>
                  LOG IN WITH GOOGLE
                </Link>
              </div>
              <div className="flex py-2">
                <p className="dark:text-white">Don't have an account?</p>
                <Link
                  to="/register"
                  className="btn btn-xs btn-link text-red-500"
                >
                  go to register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
