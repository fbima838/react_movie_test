import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
    return (
        <div className="absolute items-center h-full w-full bg-indigo-100/50 transition-all duration-300 ease-in-out overflow-hidden">
            <div className="flex flex-col h-full w-full items-center space-y-4 pb-4 overflow-clip">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout