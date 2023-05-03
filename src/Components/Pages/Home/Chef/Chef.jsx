import React, { useContext, useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const Chef = () => {
    const [chef, setChef] = useState([]);
    const {setLoading} = useContext(AuthContext)

    useEffect(() => {
        fetch('https://pamana-kitchen-data-server-abdullah-5603.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setChef(data))
            setLoading(false)
    }, [])
    return (

    <div className='w-full mt-16'>
        <p className='text-2xl font-bold text-center'>Best Filipino Chefs</p>
        <div className='w-full grid justify-center sm:grid-cols-1 md:grid-cols-3 gap-4 my-10'>
            {
                chef.map(cf => <ChefCard
                    cf={cf}
                    key={cf.id}
                ></ChefCard>)
            }
        </div>     
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

export default Chef;