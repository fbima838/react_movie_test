import React from 'react'
import { Link } from 'react-router-dom'

const ComponentCard = ({ title = "", date = "", img = "", id = "" }) => {
    return (
        <div className="flex flex-col bg-black text-white w-[230px] h-fit border-2 rounded-lg py-2 px-2 space-y-1">
            <Link to={`/detail/${id}`}>
                <img src={`https://image.tmdb.org/t/p/original${img}`} alt='poster' />
                <h4 className='text-sm font-semibold'>{title}</h4>
                <p className='text-xs text-gray-200'>{date}</p>
            </Link>
        </div >
    )
}

export default ComponentCard