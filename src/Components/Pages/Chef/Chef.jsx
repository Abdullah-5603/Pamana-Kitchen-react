import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chef, setChef] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/chef/')
        .then(res => res.json())
        .then(data => setChef(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-4 my-10'>
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