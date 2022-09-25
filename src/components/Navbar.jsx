import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscSignIn } from 'react-icons/vsc'
import logo from '../components/logo.png'

const Navbar = () => {
    return (
        <header>
            <div className='flex justify-between items-center p-4 z-[100] w-full absolute bg-[#081621]'>
                <h1 className='text-white text-3xl font-bold cursor-pointer flex justify-center items-center'><img src={logo} alt="logo" className='w-10' /></h1>
                <div className='flex'>
                    <button className=' px-4 py-2 cursor-pointer text-white  pl-4 flex  gap-1 items-center justify-center hover:text-[#A167A5] hover:scale-110 active:text-[#A167A5] '> <AiOutlineShoppingCart /> Cart
                        <span className='text-white relative bottom-3 bg-red-400 rounded-lg px-1 py text-sm'>0</span>
                    </button>

                    <button className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center hover:text-[#A167A5] hover:scale-110 active:text-[#A167A5]'> <VscSignIn /> Sign In</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar