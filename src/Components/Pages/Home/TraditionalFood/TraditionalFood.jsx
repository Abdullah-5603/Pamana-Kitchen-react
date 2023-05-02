import React, { useEffect, useState } from 'react';
import TraditionalFoodCard from '../TraditionalFoodCard.jsx/TraditionalFoodCard';

const TraditionalFood = () => {
    const [traditionalFood, setTraditionalFood] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/traditionalFood')
        .then(res=> res.json())
        .then(data => setTraditionalFood(data))
    },[])

    return (
        <div className='w-full my-20'>
            <p className='mb-12 text-2xl text-center font-bold'>Visit Us For Our Traditional Filipino Food</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                {
                    traditionalFood.map(tf => <TraditionalFoodCard
                    tf={tf}
                    key={tf.id}
                    ></TraditionalFoodCard>)
                }
            </div>
        </div>
    );
};

export default TraditionalFood;