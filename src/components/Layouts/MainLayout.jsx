import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../UI/Navbar/Navbar'

export default function MainLayout() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between bg-blue-50 pt-[80px]'>
        <Navbar />
        <div className='w-full h-full py-8 px-[10%]'>
            <Outlet />
        </div>
    </div>
  )
}
