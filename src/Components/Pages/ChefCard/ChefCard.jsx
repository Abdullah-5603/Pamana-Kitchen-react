import React from 'react';

const ChefCard = ({ cf }) => {
    const { id, name, picture, yearsOfExperience, numberOfRecipes, ratings } = cf

    return (
        <div className="card w-96 glass">
            <figure><img src={picture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='mt-2'>
                <p className='font-semibold'>Years of experience : <span className='font-normal'>{yearsOfExperience} years</span></p>
                <p className='font-semibold'>Number of Recipes : <span className='font-normal'>{numberOfRecipes} Recipes</span></p>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>Ratings: <span className='font-normal'>{ratings}</span></p>
                    <button className="bg-btn-color py-2 px-4 rounded-md font-semibold">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;