import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscSignIn } from 'react-icons/vsc'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className='flex justify-between items-center p-4 z-[100] w-full absolute bg-[#081621]'>
                <NavLink to='/'>
                    <h1 className=' cursor-pointer flex justify-center items-center'><img src={logo} alt="logo" className='w-10' /></h1>
                </NavLink>
                <div className='flex'>
                    <NavLink to='/cart' className='px-1 py-2 cursor-pointer text-white  pl-4 flex  gap-1 items-center justify-center  hover:scale-110 '>
                        <AiOutlineShoppingCart /> Cart
                        <span className='text-white relative bottom-3 bg-red-400 rounded-lg px-1 py text-sm'>0</span>
                    </NavLink>
                    <NavLink to='/signin' className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center  hover:scale-110 '>
                        <VscSignIn /> Sign In
                    </NavLink>
                </div>
            </div>
        </header >
    )
}

export default Navbar