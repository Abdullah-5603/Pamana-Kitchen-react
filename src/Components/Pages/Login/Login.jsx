import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='mx-auto p-10 w-5/12 '>
            <form className='p-10 bg-white rounded-md border-2'>
                <p className='text-xl font-bold text-black mb-7'>Login</p>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">Username or Email</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="email" name="email" required placeholder='Username or Email' />
                </div>
                <div className="flex flex-col">
                    <label className=" text-black font-semibold py-3" htmlFor="email">Password</label>
                    <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="password" required placeholder='password' />
                </div>
                <p className='text-red-700 mt-3'></p>
                <button className='bg-btn-color w-full py-3 text-xl rounded-md my-5 font-bold'>Login</button>
                <p className='text-center'>Don't have an account? <Link to='/register'><span className='text-btn-color underline'>Create Account</span></Link></p>
            </form>
            <div className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center hover:bg-gray-200 cursor-pointer'>
                <FaGoogle className='h-6 w-6' />
                <p className='font-semibold mx-auto'>Continue with Google</p>
            </div>
            <div className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center  hover:bg-gray-200 cursor-pointer'>
                <FaGithub className='h-6 w-6' />
                <p className='font-semibold mx-auto'>Continue with Github</p>
            </div>
        </div>
    );
};

export default Login;