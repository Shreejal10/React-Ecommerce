import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscSignIn } from 'react-icons/vsc'

const Navbar = () => {
    return (
        <header>
            <div className='flex justify-between items-center p-4 z-[100] w-full absolute bg-[#081621]'>
                <h1 className='text-white text-3xl font-bold cursor-pointer'>Ecommerce</h1>
                <div className='flex'>
                    <button className=' px-4 py-2 cursor-pointer text-white  pl-4 flex  gap-1 items-center justify-center hover:text-[#A167A5] hover:scale-110 active:text-[#A167A5]'> <AiOutlineShoppingCart /> Cart</button>
                    <button className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center hover:text-[#A167A5] hover:scale-110 active:text-[#A167A5]'> <VscSignIn /> Sign In</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar