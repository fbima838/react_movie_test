import React from 'react'

const FilterCard = ({ title, children }) => {
    return (
        <div className="
                flex flex-col bg-white text-black backdrop-blur-xl
                h-fit w-[250px] rounded-lg py-2 px-4 transition-all duration-300 ease-in-out
                "
        >
            <div className="flex flex-col items-start space-y-2 ">
                <h5 className="text-lg font-semibold">{title}</h5>
                {children}
            </div>
        </div>
    )
}

export default FilterCard