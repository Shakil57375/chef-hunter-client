/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const recipes = useLoaderData();
  console.log(recipes);
  const { name, image, bio, likes, number_of_recipes, years_of_experience } =
    recipes;
  return (
    <div className="my-container">
        {/* chef banner section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-[3rem] text-black mb-3">
            {name}
          </h1>
          <p className="leading-6 text-base text-gray-600">{bio}</p>
          <div className="flex lg:flex-row flex-col  justify-between items-center lg:items-start mt-5">
            <p className="text-xl font-bold text-gray-800">Likes : {likes}</p>
            <p className="text-xl font-bold text-gray-800">
              Total Recipes : {number_of_recipes}{" "}
            </p>
            <p className="text-xl font-bold text-gray-800">
              Experience : {years_of_experience} Years
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full lg:w-[1000px] h-[500px] rounded-2xl"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
