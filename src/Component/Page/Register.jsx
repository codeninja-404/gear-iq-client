import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return toast.error("Password must have atleast 6 charecters.");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have atleast one uppercase letter.");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return toast.error("Password must have special charecter.");
    }

   createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Sign Up Successful");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => toast.error(err.message));


  };
  return (
    <div className="pt-32 min-h-screen ">
      <div className="container px-2 mx-auto mb-20 ">
        <div className="hero-content mx-auto flex-col ">
          <h1 className="text-4xl text-center dark:text-white font-bold uppercase text-black">
            Please signUp first!
          </h1>
          <div className="  w-full max-w-lg  border rounded-xl  shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
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
                  Sign Up
                </button>
              </div>
              <div className="flex py-2">
                <p className="dark:text-white">Already have an account?</p>
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
