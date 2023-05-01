import React from 'react';

const Baner = () => {
    return (
        <div className='w-full relative'>
            <img style={{height: '80vh' }} className='w-full ' src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className='w-full absolute inset-0 bg-black opacity-50'>
            </div>
        </div>
    );
};

export default Baner;