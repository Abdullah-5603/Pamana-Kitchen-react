import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';

const Header = () => {
    const location = useLocation()

    const activeStyle = {
        color: '#F9A51A'
    }
    return (
        <header className='px-5 mb-5 flex justify-between items-center bg-base-200 py-3 md:py-5'>
            <p className='text-xl md:text-2xl font-bold'>Pamana Kitchen</p>
            <nav className=' flex flex-row items-center space-x-3 md:space-x-8 font-bold md:block'>
                <Link style={location.pathname === '/' ? activeStyle : null} className='hover:text-btn-color duration-200' to='/'>Home</Link>
                <Link style={location.pathname === '/blog' ? activeStyle : null} className='hover:text-btn-color duration-200' to='/blog'>Blog</Link>
                <Link to='/login'><button className='py-2 px-3 md:px-5 text-black rounded bg-btn-color'>Login</button></Link>
            </nav>
        </header>


    );
};

export default Header;