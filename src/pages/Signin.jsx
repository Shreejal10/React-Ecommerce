import React from 'react'
import { Link } from 'react-router-dom'
const Signin = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className=' absolute w-full h-full object-cover' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[500px] mx-auto bg-black/60 text-white mt-11'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign In</h1>
                            <form className='w-full flex flex-col py-4'>
                                <input className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='Email' />
                                <input className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='Password' />
                                <button className='bg-[#A167A5] py-3 my-6 rounded font-bold'>Sign Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input type="checkbox" className='mr-2' />Remember me</p>
                                    <p className='cursor-pointer'>Need Help?</p>
                                </div>
                                <p className='py-8'><span className='text-gray-600'>Don't have an account?</span>{'  '} <Link to='/signup'> Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin

