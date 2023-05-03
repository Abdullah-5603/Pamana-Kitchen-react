import React, { useContext, useEffect, useState } from 'react';
import CoursesCard from '../CoursesCard/CoursesCard';
import { AuthContext } from '../../../Provider/AuthProvider';

const Courses = () => {
    const [courses, setCourses] = useState([])
    const {setLoading} = useContext(AuthContext)

    useEffect(()=>{
        fetch('https://pamana-kitchen-data-server-abdullah-5603.vercel.app/cuisineCourse')
        .then(res => res.json())
        .then(data => setCourses(data))
        setLoading(false)
    },[])
    return (
        <div className='my-5 w-full flex flex-col items-center'>
            <p className='text-3xl font-bold mb-5 text-center'>Our Courses</p>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4' >
            {
                courses.map(course => <CoursesCard
                course={course}
                key={course.id}
                ></CoursesCard>)
            }
        </div>
        </div>
    );
};

export default Courses;