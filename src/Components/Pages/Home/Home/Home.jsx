import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import TraditionalFood from '../TraditionalFood/TraditionalFood';
import Courses from '../Courses/Courses';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../../Provider/AuthProvider';

const Home = () => {
    const { loading} = useContext(AuthContext)

    return (
        <div className='flex flex-col justify-center items-center'>
            {
                loading ? <Loader /> :
                    <>
                        <Banner />
                        <Chef />
                        <TraditionalFood />
                        <Courses />
                    </>
            }
        </div>
    );
};

export default Home;