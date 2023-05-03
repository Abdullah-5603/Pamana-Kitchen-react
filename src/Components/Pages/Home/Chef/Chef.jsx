import React, { useContext, useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const Chef = () => {
    const [chef, setChef] = useState([]);
    const {setLoading} = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:4000/')
            .then(res => res.json())
            .then(data => setChef(data))
            setLoading(false)
    }, [])
    return (

        <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 gap-4 right-0 my-10'>
            {
                chef.map(cf => <ChefCard
                    cf={cf}
                    key={cf.id}
                ></ChefCard>)
            }
        </div>
    );
};

export default Chef;