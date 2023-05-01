import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefRecipe = () => {
    const data = useLoaderData();
    const { id, name, picture, yearsOfExperience, numberOfRecipes, likes, bio, recipes } = data;
    // const recipe = recipes.map(rp => rp)

    // let recipeName;
    // let ingredients;
    // let cockingMethod;
    // let rating;

    // for(const recipe of recipes){
    //     recipeName = recipe.name;
    //     ingredients = recipe.ingredients;
    //     cockingMethod = recipe.cooking_method;
    //     rating = recipe.ratings;
    // }
    // console.log(recipeName, ingredients, cockingMethod, rating)

    return (
        <div className='md:mx-16'>
            <div className='flex justify-between w-full bg-slate-300 h-full'>
                <div className='m-16 w-5/12'>
                    <p className='text-2xl font-bold mb-5'>{name}</p>
                    <p className='font-semibold'>Years of experience : <span className='font-normal'>{yearsOfExperience} years</span></p>
                    <p className='font-semibold'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} recipes</span></p>
                    <p className='font-semibold'>Bio : <span className='font-normal'>{bio}</span></p>
                    <p className='font-semibold'>Likes : <span className='font-normal'>{likes}</span></p>
                </div>
                <img className='w-2/6' src={picture} alt="" />
            </div>
                <table className="w-full mt-5">
                    <thead className='bg-table-color'>
                        <tr>
                            <th className='p-3'>NAME</th>
                            <th>INGREDIENTS</th>
                            <th>COKING METHOD</th>
                            <th>RATINGS</th>
                            <th>FAVORITE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipes.map(recipe => <Recipe
                                recipe={recipe}
                                key={recipe.id}
                            ></Recipe>)
                        }

                    </tbody>
                </table>
        </div>
    );
};

export default ChefRecipe;