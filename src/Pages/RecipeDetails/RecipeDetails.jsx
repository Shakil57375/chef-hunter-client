/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipes = useLoaderData()
    console.log(recipes);
    return (
        <div>
            <p>Coming</p>
        </div>
    );
};

export default RecipeDetails;