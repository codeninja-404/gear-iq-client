import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = () => {};

  const handleGoogleLogIn = () => {};
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="hero-content flex-col ">
          <h1 className="text-4xl text-center font-bold uppercase text-black">
            Please LogIn first!
          </h1>
          <div className="  w-full max-w-lg  border rounded-xl  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
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
                <button className="btn  bg-blue-950 text-white hover:text-black" type="submit">
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
                <p className="">Don't have an account?</p>
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