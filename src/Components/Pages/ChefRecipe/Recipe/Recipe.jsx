import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Recipe = ({ recipe }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisable = () => {
        toast(`"${recipe.name}" is your favorite recipe`)
      setIsDisabled(!isDisabled);
    };
  
    return (
      <tr>
        <td className='w-1/12 font-semibold'>{recipe.name}</td>
        <td className='w-2/6 px-7 pt-4'>{recipe.ingredients}</td>
        <td className='w-2/6 px-5 pt-4'>{recipe.cooking_method}</td>
        <td className='w-1/12 text-center'>{recipe.ratings}</td>
        <td className='w-1/12 text-center'>
          <button disabled={isDisabled} onClick={handleDisable}>
            <HeartIcon className={isDisabled ? 'h-6 w-6 text-red-600' : 'h-6 w-6'} />
          </button>
        </td>
      </tr>


    );
};

export default Recipe;