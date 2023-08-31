import React from 'react'

const LoadingCard = () => {
  return (
    <div className="bg-white w-[98%] h-[95%] shadow-md rounded-lg py-6 px-8 space-y-4 animate-pulse overflow-y-scroll">
      <span
        className="main-card-header-loading"
      />
      <div className='grid grid-cols-3 gap-4'>
        <span className='flex h-[150px] bg-gray-200 p-4 rounded-lg col-span-1'/>
        <span className='flex h-[150px] bg-gray-200 p-4 rounded-lg col-span-2 mb-8'/>
      <span className='flex bg-gray-200 p-4 rounded-lg col-span-3'/>
      </div>
        <span className='flex h-[150px] bg-gray-200 p-4 rounded-lg'/>
    </div>
  )
}

export default LoadingCard