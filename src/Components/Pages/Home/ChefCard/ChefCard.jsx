import React from 'react';
import { ArrowRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefCard = ({ cf }) => {
    const { id, name, picture, yearsOfExperience, numberOfRecipes, likes} = cf

    return (
        <div className="w-96 glass rounded-xl">
            <img className='rounded-t-xl w-full h-64' src={picture} alt="car!" />
            <div className="card-body h-46">
                <h2 className="card-title">{name}</h2>
                <div className='mt-2'>
                <p className='font-semibold'>Years of experience : <span className='font-normal'>{yearsOfExperience} years</span></p>
                <p className='font-semibold'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} Recipes</span></p>
                </div>
                <div className="mt-5 mb-0 flex justify-between items-center">
                    <p className='font-semibold'>Likes: <span className='font-normal'>{likes}</span></p>
                    <Link to={`/chefRecipe/${id}`}><button className="bg-btn-color py-2 px-4 rounded-md font-semibold flex items-center">View Recipes<ArrowRightIcon className='h-5 w-5 ml-2'/></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;