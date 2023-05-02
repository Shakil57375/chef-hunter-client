/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";
import ActiveLink from "../../ActiveLink/ActiveLink";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between w-full  items-center lg:px-28 px-4 lg:py-6 py-4 bg-blue-950">
      <div className="text-2xl lg:text-3xl order-2 lg:order-1 font-bold cursor-pointer">
        <Link to="/" className="sm:m-0 sm:p-0 text-white">
            Recipe Expedition
        </Link>
      </div>
      <div className="flex justify-between order-1 lg:order-2 items-center flex-row-reverse lg:flex-row">
        <div>
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <span>
              {open === true ? (
                <XMarkIcon className="h-6  w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6  w-6 text-white" />
              )}
            </span>
          </div>
          <div
            className={`links flex text-black lg:text-white absolute lg:static duration-500 lg:flex-row flex-col justify-center text-lg ${
              open
                ? "block left-16 top-16 -ml-16 z-20 lg:bg-inherit bg-red-100 w-full lg:text-black text-black shadow-2xl py-5 gap-2 pl-10"
                : "hidden lg:block"
            } `}
          >
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
            <ActiveLink to="/login">Login</ActiveLink>
            <ActiveLink to="/register">Register</ActiveLink>
          </div>
        </div>
        <div>
          {/* {
              user && 
              <div className="flex gap-4">
                <button className="text-white" onClick={handleLogOut}>Sign Out</button>
                <span className='text-white mr-3'> <img src={user.photoURL} width={50} height={50} className="rounded-full" alt="" /></span>
              </div>
            } */}
        </div>
      </div>
      <div className="order-3 lg:order-3">
        <div className="btn btn-primary text-white">test</div>
      </div>
    </div>
  );
};

export default Header;
