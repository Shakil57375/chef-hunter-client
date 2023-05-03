/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import chef_img from "../../../src/assets/images/recipe.png";
import { Link } from "react-router-dom";
const Home = () => {
  const [chefInfo, setChefInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefInfo(data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(chefInfo);

  return (
    <div className="my-container">
      {/* Banner section */}
      <div className="my-container flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-[3rem] text-blue-900 mb-3">
            Discover Delicious Recipes with Recipe hunter
          </h1>
          <p className="text-2xl font-semibold leading-8 text-blue-800 mb-3">
            Bringing You a World of Flavors and Spices
          </p>
          <p className="leading-6 ">
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
          <img src={chef_img} alt="" />
        </div>
      </div>
      {/* Chef section */}
      <h1 className="text-5xl font-bold text-center mb-10 text-blue-900">Our Chefs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {chefInfo &&
          chefInfo.map((chef) => (
            <div>
              <div className="card card-compact h-[600px] w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={chef.image}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">{chef.name}</h2>
                  <p className="text-xl font-semibold">Years of experience : {chef.years_of_experience}</p>
                  <p className="text-lg">Number of Recipes : {chef.number_of_recipes}</p>
                  <p className="text-lg">Likes : {chef.likes}</p>
                  <div className="card-actions justify-center">
                    <Link to={`/${chef.id}`}>
                    <button className="btn btn-primary">View Recipes</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Our top recipe section */}
    </div>
  );
};

export default Home;

/* 
import React from 'react';

const Recipe = () => {
  const ingredients = [
    "500g boneless chicken breast, sliced",
    "2 cups Thai basil leaves",
    "4 cloves garlic, minced",
    "2 red chili peppers, sliced",
    "2 tablespoons soy sauce"
  ];

  return (
    <div>
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;

*/
