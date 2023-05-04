import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const Login = () => {
    const { signInUser, loading, setLoading, githubSignInUser, googleSignInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('')
        if (password.length < 6) {
            setError('Password at least 6 character long')
            return;
        } else {
            signInUser(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    setLoading(false)
                    navigate(from, { replace: true })
                    console.log(loggedUser)
                })
                .catch(error => {
                    const errorMessage = error.message;
                    if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                        setError('Password or Email invalid')
                        setLoading(false)
                    }
                    console.log(errorMessage)
                })
        }
    }

    const handleGoogleSignIn = () => {
        googleSignInUser()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    const handleGithubLogin = () => {
        githubSignInUser()
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }

    return (
        <>
            {
                loading && <Loader />
            }
            <div className='mx-auto p-5 md:p-10 md:w-5/12 '>
                <form onSubmit={handleSubmit} className='p-10 bg-base-200 rounded-md border-2'>
                    <p className='text-xl font-bold text-black mb-7'>Login</p>
                    <div className="flex flex-col">
                        <label className=" text-black font-semibold py-3" htmlFor="email">Username or Email</label>
                        <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="email" name="email" required placeholder='Username or Email' />
                    </div>
                    <div className="flex flex-col">
                        <label className=" text-black font-semibold py-3" htmlFor="email">Password</label>
                        <input className="outline-none border-2 border-gray-300 rounded-md p-2 focus:border-gray-500" type="password" name="password" required placeholder='password' />
                    </div>
                    <p className='text-red-700 mt-3'>{error}</p>
                    <button className='bg-btn-color w-full py-3 text-xl rounded-md my-5 font-bold'>Login</button>
                    <p className='text-center'>Don't have an account? <Link to='/register' className='link text-btn-color'>Create Account</Link></p>
                </form>
                <div onClick={handleGoogleSignIn} className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center hover:bg-base-200 cursor-pointer'>
                    <FaGoogle className='h-6 w-6' />
                    <p className='font-semibold mx-auto'>Continue with Google</p>
                </div>
                <div onClick={handleGithubLogin} className='flex w-10/12 border-2 rounded-3xl mx-auto p-2 my-5 justify-between items-center  hover:bg-base-200 cursor-pointer'>
                    <FaGithub className='h-6 w-6' />
                    <p className='font-semibold mx-auto'>Continue with Github</p>
                </div>
            </div>
        </>
    );
};

export default Login;