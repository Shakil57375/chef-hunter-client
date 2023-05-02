/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import chef from '../../../src/assets/images/recipe.png'
const Home = () => {
    return (
        <div className='my-container flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
            <div className='w-full'>
                <h1 className='text-4xl font-bold leading-[3rem] text-blue-900 mb-3'>Discover Delicious Recipes with Recipe hunter</h1>
                <p className='text-2xl font-semibold leading-8 text-blue-800 mb-3'>Bringing You a World of Flavors and Spices</p>
                <p className='leading-6 '>At Recipe hunter, we believe that cooking should be a fun and enjoyable experience that brings people together. That's why we encourage our community of food lovers to share their own recipes, tips, and tricks, and to connect with each other over their shared love of cooking. Whether you're looking for a quick weeknight meal or a show-stopping dinner party dish, Recipe hunter has got you covered. Join us on our culinary journey and start exploring the world of cuisine today!</p>
            </div>
            <div className='w-full'>
                <img src={chef} alt="" />
            </div>
        </div>
    );
};

export default Home;