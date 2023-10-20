import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSignUp = () => {};
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="hero-content flex-col ">
          <h1 className="text-4xl text-center font-bold uppercase text-black">
            Please signUp first!
          </h1>
          <div className="  w-full max-w-lg  border rounded-xl  shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
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
                <button
                  className="btn  bg-blue-950 text-white hover:text-black"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex py-2">
                <p className="">Already have an account?</p>
                <Link to="/login" className="btn btn-xs btn-link text-red-500">
                  go to log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
