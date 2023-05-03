import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
    const [show, setShow] = useState(false);

    const handleMouseEnter = () => {
        setShow(true);
    }
    const handleMouseLeave = () => {
        setShow(false);
    }

    return (
            <div className="relative">
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {children}
                </div>
                {show &&
                    <div className="absolute top-full text-xs text-center font-normal transform  -translate-x-1/2 bg-white text-gray-700 p-2 rounded-md">
                        {text}
                    </div>
                }
            </div>
    );
};

export default Tooltip;
