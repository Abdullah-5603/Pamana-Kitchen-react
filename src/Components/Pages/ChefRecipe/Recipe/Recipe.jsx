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
            <h1 className="text-3xl font-bold">{recipe.name}</h1>
            <div className='flex items-center'>
              <div className='flex'>
              <p className="py-6 font-semibold w-11/12">Ingredients : <span className='font-normal'>{recipe.ingredients.join(', ')}</span></p>
              <p className="py-6 font-semibold w-11/12">Cooking Method: <span className='font-normal'>{recipe.cooking_method}</span></p>
              </div>
              <div style={{height: '18vh'}} className='flex flex-col justify-between items-center ml-10'>
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