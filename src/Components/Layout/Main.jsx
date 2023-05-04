import React, { useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const Main = () => {
    const {bgColor} = useContext(AuthContext)
    return (
        <div className={`mx-auto md:px-16 ${bgColor ? 'bg-base-100' : 'bg-slate-500' }`}>
            <Header/>
            <Outlet/>
            <ToastContainer/>
            <Footer/>
        </div>
    );
};

export default Main;