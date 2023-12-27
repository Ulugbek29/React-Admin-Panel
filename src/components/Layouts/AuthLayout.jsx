import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='w-full h-screen flex justify-between items-center'>
        <div className='flex-1 h-full flex justify-center items-center bg-gradient-to-t from-[#DBEFFF] to-white'>
            <h2 className='text-[120px] text-[#2E80E8] font-semibold'>Rasta</h2>
        </div>

        <div className='flex-1 h-full flex justify-center items-center bg-[#DCE9F9]'>
            <Outlet />
        </div>
    </div>
  )
}
