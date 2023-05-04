/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
const TopRecipes = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [isExpend, setIsExpend] = useState(true);
  const [isFold, setIsFold] = useState(true);
  const toggleIsFold = () => {
    setIsFold(!isFold);
  };
  const toggleIsExpend = () => {
    setIsExpend(!isExpend);
  };
  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };
  const kala_buna_text =
    "Kala Bhuna is a popular meat dish in Bangladesh. It can be prepared by using any meat, though the most famous Kala Bhuna version is the Beef Kala Bhuna. The word Kala in Kala Bhuna means Black. The meat used in this dish can either be beef or mutton. The meat is cooked using difference spices such as garlic, ginger, chili and cumin. The difference between Kala Bhuna and other curry varieties is that with Kala Bhuna is it cooked for a longer period of time that often gives the meat a blackish color. Hence, Kala  Bhuna is also called Black Deep Curry";

  const Kacchi_Biriyani_text =
    "Kacchi Biriyani is a special Bangladeshi food. Kacchi in english means “raw”, this means that the ingredients for making Biriyani are mixed as raw instead of cooking the meat and rice. The main ingredients for this dish are rice and marinated meat. In a  traditional way, Biriyani is cooked using a clay oven while the pot is sealed using a flour dough. This will allow the Biriyani to cook from the steam. With Kacchi Biriyani.";
  const Shorshe_Ilish_text =
    "Shorshe Ilish or Hilsa Fish with Mustard Curry.Hilsa is considerd to be a national fish in Bangladesh, in fact at least 70% of the production of Hilsa fish is from Bangladesh. There are different variations in cooking Hilsa, the most popular is the Shorshe Ilish. With this dish, the Hilsa fish is cooked in mustard gravy. It is usually served with white rice. The mustard gravy is made from different spices.";
  return (
    <div>
      {/* Our popular recipe section */}
      <h1 className="text-5xl font-serif font-bold text-center my-20 text-black">
        Our Top Retted Recipes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
          <div className="h-96 w-full flex items-center justify-center transition duration-300 ease-in-out  transform hover:scale-105">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/A_photo_of_popular_Bengali_dish_Sorshe_Ilish_served_traditionally.jpg/1200px-A_photo_of_popular_Bengali_dish_Sorshe_Ilish_served_traditionally.jpg"
              alt="Sorshe Ilish"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sorshe Ilish</div>
            <p className="text-gray-700 text-base">
            <p className= "font-mono text-gray-700">
            {isFold
                  ? Shorshe_Ilish_text.slice(0, 150) + "..."
                  : Shorshe_Ilish_text}
              </p>
              <button className="text-blue-600" onClick={toggleIsFold}>
                {isFold ? "Read More" : "Read Less"}
              </button>
            </p>
            <div className="flex items-center mt-4">
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStarHalfAlt className="text-yellow-500 w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 hover:-translate-y-2 hover:-translate-x-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
          <div className="h-96 w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://topperone.com/wp-content/uploads/2023/03/Kacchi-Biryani-is-the-most-delicious-Biryani-in-the-world.jpg"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Kacchi Biriyani
            </div>
            <p className="text-gray-700 text-base">
              <p className= "font-mono text-gray-700">
                {isExpend
                  ? Kacchi_Biriyani_text.slice(0, 150) + "..."
                  : Kacchi_Biriyani_text}
              </p>
              <button className="text-blue-600" onClick={toggleIsExpend}>
                {isExpend ? "Read More" : "Read Less"}
              </button>
            </p>
            <div className="flex items-center mt-4">
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStarHalfAlt className="text-yellow-500 w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 hover:-translate-y-2 hover:-translate-x-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
          <div className="h-96 w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://mumokitchen.com/wp-content/uploads/2020/09/Kala-Vuna-Mumo-Kitchen-16-scaled.jpg"
              alt="Sorshe Ilish"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Kala Bhuna</div>
            <p className="text-gray-700 text-base">
              <p className= "font-mono text-gray-700">
                {isTruncated
                  ? kala_buna_text.slice(0, 150) + "..."
                  : kala_buna_text}
              </p>
              <button className="text-blue-600" onClick={toggleIsTruncated}>
                {isTruncated ? "Read More" : "Read Less"}
              </button>
            </p>
            <div className="flex items-center mt-4">
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
                <FaStar className="text-yellow-500 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;
