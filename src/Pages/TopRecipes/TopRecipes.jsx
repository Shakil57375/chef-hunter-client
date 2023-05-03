/* eslint-disable no-unused-vars */
import React from "react";

const TopRecipes = () => {
  return (
    <div>
      {/* Our popular recipe section */}
      <h1 className="text-5xl font-bold text-center my-20 text-blue-900">
        Our Top Retted Recipes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out">
          <div className="h-96 w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/A_photo_of_popular_Bengali_dish_Sorshe_Ilish_served_traditionally.jpg/1200px-A_photo_of_popular_Bengali_dish_Sorshe_Ilish_served_traditionally.jpg"
              alt="Sorshe Ilish"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sorshe Ilish</div>
            <p className="text-gray-700 text-base">
              Shorshe Ilish or Hilsa Fish with Mustard Curry.Hilsa is considerd
              to be a national fish in Bangladesh, in fact at least 70% of the
              production of Hilsa fish is from Bangladesh. There are different
              variations in cooking Hilsa, the most popular is the Shorshe
              Ilish. With this dish, the Hilsa fish is cooked in mustard gravy.
              It is usually served with white rice. The mustard gravy is made
              from different spices.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out">
          <div className="h-96 w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://topperone.com/wp-content/uploads/2023/03/Kacchi-Biryani-is-the-most-delicious-Biryani-in-the-world.jpg"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Kacchi Biriyani (Mutton Biriyani)
            </div>
            <p className="text-gray-700 text-base">
              Kacchi Biriyani is a special Bangladeshi food. Kacchi in english
              means “raw”, this means that the ingredients for making Biriyani
              are mixed as raw instead of cooking the meat and rice. The main
              ingredients for this dish are rice and marinated meat. In a
              traditional way, Biriyani is cooked using a clay oven while the
              pot is sealed using a flour dough. This will allow the Biriyani to
              cook from the steam. With Kacchi Biriyani.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out">
          <div className="h-96 w-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <img
              src="https://mumokitchen.com/wp-content/uploads/2020/09/Kala-Vuna-Mumo-Kitchen-16-scaled.jpg"
              alt="Sorshe Ilish"
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sorshe Ilish</div>
            <p className="text-gray-700 text-base">
              Kala Bhuna is a popular meat dish in Bangladesh. It can be
              prepared by using any meat, though the most famous Kala Bhuna
              version is the Beef Kala Bhuna. The word Kala in Kala Bhuna means
              Black. The meat used in this dish can either be beef or mutton.
              The meat is cooked using difference spices such as garlic, ginger,
              chili and cumin. The difference between Kala Bhuna and other curry
              varieties is that with Kala Bhuna is it cooked for a longer period
              of time that often gives the meat a blackish color. Hence, Kala
              Bhuna is also called Black Deep Curry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRecipes;
