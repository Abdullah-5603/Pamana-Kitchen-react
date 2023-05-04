import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';


const UserProfile = () => {
    const { user, UpdateUserName, UpdatePhoto, loading } = useContext(AuthContext)
    const [newUserName, setNewUserName] = useState('')
    const [newPhoto, setNewPhoto] = useState('')

    if(!user){
        return <Navigate to='/'/>
    }

    const handleUserName = (event) =>{
        // console.log(event.target)
        event.preventDefault();
        const userName = event.target.userName.value;

        UpdateUserName(userName)
            .then(() => {
                setNewUserName(userName)
                console.log("Profile updated successfully!")
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    const handlePhoto = event =>{
        event.preventDefault();
        const photoUrl = event.target.photoUrl.value

        UpdatePhoto(photoUrl)
        .then(()=>{
            setNewPhoto(photoUrl)
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
    return (
        <>
        {
            loading ? <Loader/> : <div className='h-full w-10/12 mx-auto bg-base-200 my-10 rounded-xl flex flex-col justify-center items-center'>
            <img className='my-7 h-20 md:h-28 w-20 md:w-28 rounded-full' src={newPhoto === '' ? user.photoURL : newPhoto} alt="" />
            <div className='my-7 w-11/12 md:w-7/12'>
                <p className='text-xl font-bold'>User Name: <span className='font-semibold'>{newUserName === '' ? user.displayName : newUserName}</span></p>
                <p className='text-xl font-bold'>User Email : <span className='font-semibold'>{user.email ? user.email : 'No email Address'}</span></p>
            </div>
            <div className='form-control flex flex-col mb-10 w-11/12 md:w-7/12'>
                <form onSubmit={handleUserName} className="flex my-7 w-full">
                    <button className='btn'>Update Username</button>
                    <input type="text" name='userName' placeholder="Username" className="w-full input input-bordered focus:outline-none" />
                </form>
                <form onSubmit={handlePhoto} className="flex my-5 w-full">
                    <button className='btn'>Update Image</button>
                    <input type="text" name='photoUrl' placeholder="Image Url" className="w-full focus:outline-none input input-bordered" />
                </form>
            </div>
        </div>
        }
        </>
    );
};

export default UserProfile;