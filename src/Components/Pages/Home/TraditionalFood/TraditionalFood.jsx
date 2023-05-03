import React, { useContext, useEffect, useState } from 'react';
import TraditionalFoodCard from '../TraditionalFoodCard/TraditionalFoodCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const TraditionalFood = () => {
    const [traditionalFood, setTraditionalFood] = useState([]);
    const {setLoading} = useContext(AuthContext)

    useEffect(()=>{
        fetch('https://pamana-kitchen-data-server-abdullah-5603.vercel.app/traditionalFood')
        .then(res=> res.json())
        .then(data => setTraditionalFood(data))
        setLoading(false)
    },[])

    return (
        <div className='w-full my-20'>
            <p className='mb-12 text-2xl text-center font-bold'>Visit Us For Our Traditional Filipino Food</p>
            <div className="grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-4">
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