import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Baner from '../../Home/Baner/Baner';

const Header = () => {
    const location = useLocation()

    const activeStyle = {
        color: '#F9A51A'
    }
    return (
        <header className='mx-16 mb-5 flex justify-between bg-slate-100 py-5 px-16'>
            <p className='text-2xl font-bold'>Pamana Kitchen</p>
            <nav className='flex space-x-8 items-center font-bold '>
                <Link style={location.pathname === '/' ? activeStyle : null} className='hover:text-btn-color duration-200' to='/'>Home</Link>
                <Link style={location.pathname === '/blog' ? activeStyle : null} className='hover:text-btn-color duration-200' to='/blog'>Blog</Link>
                <Link to='/login'><button className='py-2 px-5 text-black rounded bg-btn-color' >Login</button></Link>
            </nav>
        </header>

    );
};

export default Header;