/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const AboutUs = () => {
  return (
    <div>
      {/* Banner section */}
      <div>
        <div
          className=" bg-cover bg-center relative"
          style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url('https://images.unsplash.com/photo-1491226907933-45f03868ca1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80')`,
          }}
        ></div>
        <div className="text-white absolute top-1/3 transform">
          <h1 className="text-center  font-bold mb-4 font-sans text-5xl">
            About Us
          </h1>
          <p className="text-lg text-center lg:px-56 px-5">
            At Recipe hunter, we believe that cooking should be a fun and
            enjoyable experience that brings people together. That's why we
            encourage our community of food lovers to share their own recipes,
            tips, and tricks, and to connect with each other over their shared
            love of cooking. Whether you're looking for a quick weeknight meal
            or a show-stopping dinner party dish, Recipe hunter has got you
            covered. Join us on our culinary journey and start exploring the
            world of cuisine today!
          </p>
        </div>
      </div>
      {/* Our aim section */}
      <div className="my-container">
        <div className="flex flex-col lg:flex-row  justify-between gap-5 items-center">
          <div className="basis-full lg:basis-1/2">
            <p className="text-2xl font-bold font-sans text-orange-700 ">
              Our aim is to
            </p>
            <p className="text-5xl my-5 font-sans font-bold">
              Taking Cooking to the next level
            </p>
            <p className="text-lg text-gray-500 font-serif">
              Our website is designed to be user-friendly and easy to navigate.
              With a clean, modern layout, you can quickly find what you're
              looking for. We offer a wide range of recipes, from classic
              favorites to new and innovative dishes. You can browse by
              category, cuisine, dietary restrictions, or simply search for a
              specific ingredient.
            </p>
          </div>
          <div className="lg:basis-1/2 gap-5  basis-full">
            <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out mb-5 ">
              <p className="text-3xl font-bold mb-3">Vision</p>
              <p>
                Our mission is to inspire and empower people to explore the
                world of food by providing them with delicious recipes, expert
                guidance, and a community of passionate foodies. We believe that
                food is more than just sustenance; it's a cultural experience
                that connects people across borders and generations.{" "}
              </p>
            </div>
            <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
              <p className="text-3xl font-bold mb-3">Mission</p>
              <p>
                Our vision is to be the leading digital platform for food
                enthusiasts around the world. We want to create a community that
                fosters a love and appreciation for all types of cuisine,
                encourages the sharing of recipes, and inspires creativity in
                the kitchen.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between gap-5 items-center">
        <div
          className=" bg-cover bg-center  hidden lg:block relative "
          style={{
            width: "100%",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
          }}
        >
          <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="lg:hidden block w-full" alt="" />
        </div>
        <div className="text-white lg:absolute static  transform">
          <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out w-full lg:w-96  lg:ml-32 lg-0 ">
            <div className="px-6 py-4">
              <div className=" font-bold text-2xl mb-2 text-gray-600  text-center">
                Call Center
              </div>
              <p className="text-gray-600 text-base mb-4 font-mono">
                You can contact us in several ways. The easiest and quickest way
                to reach us is by phone. You'll find our phone number listed on
                this page, along with our business hours. Our customer service
                representatives are available to take your call and assist you
                with any queries you may have.
              </p>
              <div className="flex items-center gap-3 mb-2">
                <ArrowRightIcon className="w-6 h-6 text-orange-700"></ArrowRightIcon>
                <p className="text-black"> Customer Service : 01736802159</p>
              </div>
              <div className="flex items-center gap-3">
                <ArrowRightIcon className="w-6 h-6 text-orange-700"></ArrowRightIcon>
                <p className="text-black"> Advertise : 01857832578</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
