/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full pt-4 pb-4 mt-6">
      <div className="text-white text-center text-sm mb-2">
        About Chef Recipe Hunter!
      </div>
      <nav className="flex lg:flex-row flex-col justify-center items-center">
        <a href="/" className="text-gray-500 hover:text-white px-3 py-2">
          Home
        </a>
        <a href="/blogs" className="text-gray-500 hover:text-white px-3 py-2">
          Blogs
        </a>
        <a href="/login" className="text-gray-500 hover:text-white px-3 py-2">
          Login
        </a>
        <a
          href="/register"
          className="text-gray-500 hover:text-white px-3 py-2"
        >
          Register
        </a>
      </nav>
      <div>
        <p className="text-center font-semibold text-gray-500 hover:text-white ">
          Contact with me by using
        </p>
        <div className="flex justify-center items-center mt-4">
          <a href="#" className=" mr-4">
            <FaFacebook className="text-gray-500 hover:text-white " />
          </a>
          <a href="#" className="mr-4">
            <FaTwitter className="text-gray-500 hover:text-white " />
          </a>
          <a href="#" className="mr-4">
            <FaInstagram className="text-gray-500 hover:text-white " />
          </a>
        </div>
      </div>
      <div className="text-gray-500 text-center text-xs mt-4">
        © 2023 Chef Recipe Hunter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
