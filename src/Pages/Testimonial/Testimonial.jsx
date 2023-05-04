/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="my-20">
        <p className="text-center text-orange-700 font-bold text-2xl mb-5">
          TESTIMONIAL
        </p>
        <h1 className="text-5xl font-serif font-bold text-center text-black">
          What they say ?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
          <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
            <div className="rounded-full border-2 border-black overflow-hidden mx-auto mt-6 h-24 w-24 flex items-center justify-center">
              <img
                src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
                alt="Your Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className=" font-bold text-2xl mb-2 text-gray-600  text-center">
                Imran Hossain
              </div>
              <p className="text-gray-600 text-base font-mono">"I've been using this food recipe website for a while now and I have to say, it's become my go-to source for delicious and healthy recipes. The website is easy to navigate and the recipes are well-written and easy to follow. I appreciate the variety of recipes, catering to different dietary restrictions and preferences. Highly recommend!"</p>
            </div>
          </div>
          <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
            <div className="rounded-full border-2 border-black overflow-hidden mx-auto mt-6 h-24 w-24 flex items-center justify-center">
              <img
                src="https://media.istockphoto.com/id/184122811/photo/handsome-businessman-wearing-a-name-tag-isolated.jpg?s=612x612&w=0&k=20&c=A9Fsh55o9nqz77UJ-0yqEr1TAzrJ1tWdpCvgMZiXrJk="
                alt="Your Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className=" font-bold text-2xl mb-2 text-gray-600  text-center">
                Methew David
              </div>
              <p className="text-gray-600 text-base font-mono">"I stumbled upon this food recipe website and I have to say, I'm impressed. The website is well-designed and easy to use. The recipes are delicious and the instructions are clear and concise. I love the variety of recipes available, catering to different cuisines and dietary preferences. Highly recommend giving this website a try!"</p>
            </div>
          </div>
          <div className="bg-white shadow-lg hover:-translate-y-2 hover:-translate-x-2 rounded-lg overflow-hidden border-2 border-gray-300 hover:shadow-xl transform transition duration-300 p-6 ease-in-out ">
            <div className="rounded-full border-2 border-black overflow-hidden mx-auto mt-6 h-24 w-24 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzGgsZbCWfb9E9_BII8YCvMe-A4ta1ZGzIQ&usqp=CAU"
                alt="Your Image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className=" font-bold text-2xl mb-2 text-gray-600  text-center">
                Perry
              </div>
              <p className="text-gray-600 text-base font-mono">"I've been using this food recipe website for meal planning and it's been a lifesaver. The recipes are easy to follow and use ingredients that are easily accessible. I appreciate the variety of recipes available, catering to different dietary restrictions and preferences. I've been able to experiment with new cuisines and dishes and have had great success. Highly recommend!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
