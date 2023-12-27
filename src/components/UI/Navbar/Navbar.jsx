import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    
    const navigate = useNavigate()
    const logOut = ()=> {
        localStorage.clear()
        navigate(0)
    }


  return (
    <nav className='fixed w-full top-0 flex justify-between items-center bg-slate-600 py-6 px-[10%] z-50'>
        <ul className='flex gap-4'>
            <li className='text-lg font-semibold text-white'>
                <Link to="/products/">Products</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
                <Link to="/comments/">Comments</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
                <Link to="/users/">Users</Link>
            </li>
            <li className='text-lg font-semibold text-white'>
                <Link to="/calculator/">Calculator</Link>
            </li>
        </ul>
        <button onClick={logOut} className='px-4 py-3 text-lg font-semibold text-white bg-red-700 rounded-xl'>Log out</button>
    </nav>
  )
}
