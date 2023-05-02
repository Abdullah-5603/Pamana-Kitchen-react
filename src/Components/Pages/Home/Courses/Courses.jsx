import React, { useEffect, useState } from 'react';
import CoursesCard from '../CoursesCard/CoursesCard';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/cuisineCourse')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='my-5 w-full'>
            <p className='text-3xl font-bold mb-5 text-center'>Our Courses</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
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