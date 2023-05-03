import React, { useState } from 'react';

const Banner = () => {
  const [showBlur, setShowBlur] = useState(true);

  return (
    <div className='w-full relative'>
      <img
        onLoad={() => setShowBlur(false)}
        className={`w-full h-height-sm md:h-height-md ${showBlur ? "blur-md" : "blur-0"} transition duration-1000`}
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=80"
        alt=""
        style={{ filter: "brightness(65%)" }}
      />

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-white'>
          <h1 className='text-3xl md:text-6xl font-bold m-7 md:m-10'>Food that reminds of <br />
            YOUR HOME!!
          </h1>
          <p className='md:text-2xl font-bold m-7 md:m-10 '>We serve delicious food that will satisfy your taste buds</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
