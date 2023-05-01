import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;