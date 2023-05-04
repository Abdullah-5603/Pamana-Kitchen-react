import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { id, name, picture, yearsOfExperience, numberOfRecipes, likes, bio, recipes } = data;

    return (
        <div>
            <div className='flex flex-col-reverse md:flex-row justify-between w-full bg-base-200 rounded-xl h-full'>
                <div className='m-6 md:m-16 md:w-5/12'>
                    <p className='text-2xl font-bold mb-5'>{name}</p>
                    <p className='font-semibold'>Years of experience : <span className='font-normal'>{yearsOfExperience} years</span></p>
                    <p className='font-semibold'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} recipes</span></p>
                    <p className='font-semibold'>Bio : <span className='font-normal'>{bio}</span></p>
                    <p className='font-semibold'>Likes : <span className='font-normal'>{likes}</span></p>
                </div>
                <img className='md:w-2/6 rounded-t-xl md:rounded-r-xl' src={picture} alt="" />
            </div>
            <p className='text-3xl font-bold text-center mt-16 mb-10'>{name} recipes</p>
            <div className="grid grid-cols-1 gap-4 my-10">


                {
                    recipes.map(recipe => <Recipe
                        recipe={recipe}
                        key={recipe.id}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefRecipe;