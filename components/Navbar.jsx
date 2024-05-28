import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  justify-between bg-slate-50 text-purple-500 py-5'>
        
        <div className="w-8" >Yihenew</div>

        <nav className='blur-none font-medium  mx-10'>
            <Link className='hover:text-red-600 transition-colors mr-5 blur-none' href='/'>Home</Link>
            <Link className='hover:text-red-600 transition-colors mr-5 blur-none' href='/login'>Login</Link>
            <Link className='hover:text-red-600 transition-colors mr-5 blur-none' href='/signup'>signup</Link>
        </nav>

    </div>
  )
}

export default Navbar
