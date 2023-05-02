/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = () =>{
        
    }
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
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type= "password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
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
              
              <p className="my-2 text-center text-2xl font-semibold border-b-2 border-slate-400 bg-opacity-10" >OR</p>
              
              <div className="">
                <img
                  className=" social-button cursor-pointer"
                  src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
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