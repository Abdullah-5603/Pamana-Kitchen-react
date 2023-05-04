import React, { useState } from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDisable = () => {
    toast(`"${recipe.name}" is your favorite recipe`)
    setIsDisabled(!isDisabled);
  };

  return (

      <div className="hero bg-base-200 rounded-xl">
        <div className="hero-content flex-row">
          <div>
            <h1 className="text-2xl px-2 md:text-3xl font-bold">{recipe.name}</h1>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='flex justify-between'>
              <p className="py-6 px-2 font-semibold w-7/12 md:w-10/12">Ingredients : <span className='font-normal'>{recipe.ingredients.join(', ')}</span></p>
              <p className="py-6 px-2 font-semibold w-7/12 md:w-10/12">Cooking Method: <span className='font-normal'>{recipe.cooking_method}</span></p>
              </div>
              <div className='flex h-10 md:h-32 w-9/12 md:w-1 flex-row-reverse md:flex-col justify-between items-center md:ml-10'>
                <button disabled={isDisabled} onClick={handleDisable}>
                  <HeartIcon className={isDisabled ? 'h-6 w-6 text-red-600' : 'h-6 w-6'} />
                </button>
                <p className='flex items-center'>{recipe.ratings}<StarIcon className='h-6 w-6 mx-2 text-btn-color'/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Recipe;