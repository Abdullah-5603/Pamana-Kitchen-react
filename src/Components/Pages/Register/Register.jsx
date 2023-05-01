import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='mx-auto p-10 w-5/12 '>
        <form className='p-10 bg-white rounded-md border-2'>
            <p className='text-xl font-bold text-black mb-7'>Register</p>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Name</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="text" name="name" placeholder='name' />
            </div>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Photo URL</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="text" name="photoUrl" placeholder='Photo url' />
            </div>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email"> Email</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="email" name="email" required placeholder='Email' />
            </div>
            <div className="flex flex-col">
                <label className=" text-black font-semibold py-3" htmlFor="email">Password</label>
                <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="password" required placeholder='password' />
            </div>
            <p className='text-red-700 mt-3'></p>
            <button className='bg-btn-color w-full py-3 text-xl rounded-md my-5 font-bold'>Login</button>
            <p className='text-center'>Already have an account? <Link to='/login'><span className='text-btn-color underline'>Login</span></Link></p>
        </form>
    </div>
    );
};

export default Register;