/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import TopRecipes from "../TopRecipes/TopRecipes";
import Testimonial from "../Testimonial/Testimonial";
const Home = () => {
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    fetch("https://assignment-ten-server-shakil57375.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefInfo(data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(chefInfo);

  return (
    <div className="my-container">
      {/* Banner section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full">
          <h1 className="text-4xl font-serif font-bold leading-[3rem] text-black mb-3">
            Discover Delicious Recipes with Recipe hunter
          </h1>
          <p className="text-2xl font-semibold leading-8 text-black mb-3">
            Bringing You a World of Flavors and Spices
          </p>
          <p className="leading-6 font-mono ">
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
        <div className="w-full">
          {/* <img src={chef_img} alt="" /> */}
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1627662168806-efa33a7cda86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                className="w-full rounded-2xl h-auto"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
                className="w-full rounded-2xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1483737778139-63dff4421d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full rounded-2xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1492470026006-0e12a33eb7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full rounded-2xl"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chef section */}
      <h1 className="text-5xl font-serif  font-bold text-center my-20 text-black">
        Our Chefs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {chefInfo &&
          chefInfo.map((chef) => (
            <div>
              <div className="card card-compact h-[600px] w-full bg-base-100 shadow-xl">
                <figure>
                  <LazyLoad>
                  <img src={chef.image} />
                  </LazyLoad>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">{chef.name}</h2>
                  <p className="text-xl font-semibold">
                    Years of experience : {chef.years_of_experience}
                  </p>
                  <p className="text-lg">
                    Number of Recipes : {chef.number_of_recipes}
                  </p>
                  <p className="text-lg">Likes : {chef.likes}</p>
                  <div className="card-actions justify-center pb-5">
                    <Link to={`/recipe/${chef.id}`}>
                      <button className="d-btn">View Recipes</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <TopRecipes></TopRecipes>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
