import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import TraditionalFood from '../TraditionalFood/TraditionalFood';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Banner/>
            <Chef/>
            <TraditionalFood/>
            <Courses/>
        </div>
    );
};

export default Home;