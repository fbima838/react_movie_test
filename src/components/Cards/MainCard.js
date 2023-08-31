import React from 'react'

const MainCard = ({ children, title = "Title" }) => {
    return (
      <div className="flex flex-col bg-white w-[98%] h-[87%] rounded-lg py-2 px-8 overflow-y-scroll">
        <h4 className='text-2xl font-bold w-full border-b-2 py-4 border-blue-300'>{title}</h4>
        {children}
      </div>
    );
  };

export default MainCard