import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <ToastContainer/>
        </div>
    );
};

export default Main;