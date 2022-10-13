import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscSignIn, VscSignOut } from 'react-icons/vsc'
import logo from '../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const signIn = <VscSignIn />
    const signOut = <VscSignOut />
    return (
        <div className='flex justify-between items-center p-4 z-[100] w-full bg-[#081621] h-[10vh]'>
            <NavLink to='/'>
                <h1 className=' cursor-pointer flex justify-center items-center'><img src={logo} alt="logo" className='w-10' /></h1>
            </NavLink>
            <div className='flex'>
                <NavLink to='/cart' className='px-1 py-2 cursor-pointer text-white  pl-4 flex  gap-1 items-center justify-center  hover:scale-110 '>
                    <AiOutlineShoppingCart /> Cart
                    <span className='text-white relative bottom-3 bg-red-400 rounded-lg px-1 py text-sm'>0</span>
                </NavLink>
                <button to='/signin' className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center  hover:scale-110'>
                    {user ? <Link to="/" onClick={() => auth.signOut(auth)} className='flex items-center justify-center gap-1 hover:text-[#A167A5]'><VscSignOut />Sign Out</Link> : <NavLink to='/signin' className='flex items-center justify-center gap-1'><VscSignIn />Sign In</NavLink>}
                </button>
                {/* <div>
                    {user ? <NavLink to='/signin' className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center  hover:scale-110 '> </NavLink> : <NavLink to='/signin' className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center  hover:scale-110 '><VscSignIn />Sign In </NavLink>}
                </div> */}
            </div>
        </div>
    )
}

export default Navbar