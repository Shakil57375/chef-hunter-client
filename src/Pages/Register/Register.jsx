/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, goggleSignUp, githubSignUp } = useContext(AuthContext);
  // console.log(githubSignUp);
  // console.log(registerUser);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photo.value;
    const password = from.password.value;
    if (password.length < 6) {
      setError("Please add more then 6 character");
      return;
    }
    if ((email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result);
          setSuccess("User successfully registered");
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }
  };
  const handleGoogleLogin = () => {
    goggleSignUp()
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setSuccess("User Sign up successfully");
    })
    .catch((error) => {
      console.log(error);
      setError(error.message);
    });
  };
  const handleGithubLogin = () => {
    githubSignUp()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setSuccess("User Sign up successfully");
    })
    .catch(error =>{
      console.log(error);
      setError(error.message)
    })
  };
  return (
    <div>
      <div className="hero min-h-screen lg:mt-24 mt-[4.2rem] bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up!</h1>
          </div>
          <div className="card flex-shrink-0 lg:w-[450px] sm:w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <p className="text-red-700">{error}</p>
              <p className="text-green-600">{success}</p>
              <div>
                <a href="#" className="label-text-alt link link-hover">
                  Already have an account? Please{" "}
                  <Link className="text-blue-600" to="/login">
                    Login
                  </Link>
                </a>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign up</button>
              </div>

              <p className="my-2 text-center text-2xl font-semibold border-b-2 border-slate-400 bg-opacity-10">
                OR
              </p>

              <div className="">
                <img
                  onClick={handleGoogleLogin}
                  className=" social-button cursor-pointer"
                  src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  onClick={handleGithubLogin}
                  className=" social-button cursor-pointer"
                  src="https://i.ibb.co/g9f4P0S/github-btn.png"
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
