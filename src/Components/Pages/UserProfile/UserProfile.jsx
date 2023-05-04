import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';


const UserProfile = () => {
    const { user, UpdateUser } = useContext(AuthContext)

    if (!user) {
        return <Navigate to='/'></Navigate>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const userName = form.userName.value;

        const details = {
            photoUrl: photoUrl,
            displayName: userName
        }

        UpdateUser(details)
            .then(() => {
                console.log("Profile updated successfully!")
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }
    console.log(user)
    return (
        <div className='h-full w-10/12 mx-auto bg-base-200 my-10 rounded-xl flex flex-col justify-center items-center'>
            <img className='my-5 h-28 w-28 rounded-full' src={user.photoURL} alt="" />
            <div className='my-5'>
                <p className='text-xl font-bold'>Username: <span className='font-semibold'>{user.displayName}</span></p>
                <p className='text-xl font-bold'>Email : <span className='font-semibold'>{user.email ? user.email : 'No email Address'}</span></p>
                <p className='text-xl font-bold'>Phone Number : <span className='font-semibold'>{user.phoneNumber ? user.phoneNumber : 'No Phone Number'}</span></p>
            </div>
            <form onSubmit={handleSubmit} className='form-control flex flex-col mb-5 w-7/12'>
                <div className="flex w-full">
                    <button className='btn'>Update Username</button>
                    <input type="text" name='userName' placeholder="Username" className="w-full input input-bordered focus:outline-none" />
                </div>
                <div className="flex my-2 w-full">
                    <button className='btn'>Update Image</button>
                    <input type="text" name='photoUrl' placeholder="Image Url" className="w-full focus:outline-none input input-bordered" />
                </div>
            </form>
        </div>
    );
};

export default UserProfile;