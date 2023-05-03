import React from 'react';

const CoursesCard = ({ course }) => {
    const { name, price, description, instructor, duration } = course
    return (
        <div className="card w-96 glass">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p className='font-semibold'>Instructor : <span className='font-normal'>{instructor}</span></p>
                    <p className='font-semibold'>Description : <span className='font-normal'>{description}</span></p>
                    <p className='font-semibold'>Duration : <span className='font-normal'>{duration}</span></p>
                    <p className='font-semibold'>Price : <span className='font-normal'>{price} $</span></p>
                </div>
                <button className="mt-auto bg-btn-color py-2 text-xl font-bold rounded-md">Enroll Now</button>
            </div>
        </div>
    );
};

export default CoursesCard;