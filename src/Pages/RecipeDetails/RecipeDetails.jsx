/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const allData = useLoaderData();
  console.log(allData?.recipes?.[0]?.first_recipe_rating);
  const { name, image, bio, likes, number_of_recipes, years_of_experience } =
    allData;
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
      <div className="lg:mt-20 mt-10">
        <h2 className="text-5xl font-bold text-center my-10 lg:my-20 text-black ">
          {name}'s Popular Recipes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-5">
          <div className="card lg:w-96 w-full bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out relative ">
            <div className="card-body">
              <h2 className=" card-title text-2xl font-bold">
                Recipe Name : {allData?.recipes?.[0]?.first_recipe_name}
              </h2>
              <div>
                <p className="text-[24px] font-semibold text-gray-700">
                  Ingredients:
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[0]?.first_recipe_ingredients[0]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[0]?.first_recipe_ingredients[1]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[0]?.first_recipe_ingredients[2]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[0]?.first_recipe_ingredients[3]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[0]?.first_recipe_ingredients[4]}{" "}
                  <span className="text-blue-500">etc...</span>
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Rating : {allData?.recipes?.[0]?.first_recipe_rating}
                </p>
              </div>
              <div className="mb-16">
                <span className="text-xl font-semibold">Cooking Method : </span>{" "}
                {allData?.recipes?.[0]?.first_recipe_cooking_method}
              </div>
              <div className="card-actions justify-center absolute bottom-10 left-36">
                <button className="btn">Favorite</button>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 w-full bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out relative">
            <div className="card-body">
              <h2 className=" card-title text-2xl font-bold">
                Recipe Name : {allData?.recipes?.[1]?.second_recipe_name}
              </h2>
              <div>
                <p className="text-[24px] font-semibold text-gray-700">
                  Ingredients:
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[1]?.second_recipe_ingredients[0]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[1]?.second_recipe_ingredients[1]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[1]?.second_recipe_ingredients[2]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[1]?.second_recipe_ingredients[3]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[1]?.second_recipe_ingredients[4]}{" "}
                  <span className="text-blue-500">etc...</span>
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Rating : {allData?.recipes?.[1]?.second_recipe_rating}
                </p>
              </div>
              <div className="mb-16">
                <span className="text-xl font-semibold">Cooking Method :</span>{" "}
                {allData?.recipes?.[1]?.second_recipe_cooking_method}
              </div>
              <div className="card-actions justify-center absolute bottom-10 left-36">
                <button className="btn">Favorite</button>
              </div>
            </div>
          </div>
          <div className="card lg:w-96 w-full bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out relative">
            <div className="card-body">
              <h2 className=" card-title text-2xl font-bold">
                Recipe Name : {allData?.recipes?.[2]?.third_recipe_name}
              </h2>
              <div>
                <p className="text-[24px] font-semibold text-gray-700">
                  Ingredients:
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[2]?.third_recipe_ingredients[0]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[2]?.third_recipe_ingredients[1]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[2]?.third_recipe_ingredients[2]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[2]?.third_recipe_ingredients[3]}
                </p>
                <p className="text-xl text-gray-600">
                  {allData?.recipes?.[2]?.third_recipe_ingredients[4]}{" "}
                  <span className="text-blue-500">etc...</span>
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold">
                  Rating : {allData?.recipes?.[2]?.third_recipe_rating}
                </p>
              </div>
              <div className="mb-16">
                <span className="text-xl font-semibold">Cooking Method : </span>{" "}
                {allData?.recipes?.[2]?.third_recipe_cooking_method}
              </div>
              <div className="card-actions justify-center absolute bottom-10 left-36">
                <button className="btn">Favorite</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
