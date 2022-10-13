import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsGoogle } from 'react-icons/bs'
import { auth } from '../firebase/config'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { UserAuth } from '../context/AuthContext'
const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { logIn } = UserAuth()
    const navigate = useNavigate()
    const googleSignin = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
        navigate('/')
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        }
        catch (error) {
            console.log(error);
            setError('Incorrect Credentials');
        }
    }
    return (
        <>
            <div className='flex items-center justify-center w-full'>
                <section className="h-[85vh]">
                    <div className="px-6 h-full text-gray-800">
                        {error ? <p className='p-3 bg-red-400 my-3'>{error}</p> : null}
                        <div
                            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                        >
                            <div
                                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="w-full"
                                    alt="Sample image"
                                />
                            </div>
                            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-row items-center justify-center lg:justify-start">
                                        <p className="text-lg mb-0 mr-4">Sign in with</p>
                                        <button onClick={googleSignin}
                                            type="button"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                            className="inline-block p-3  text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md bg-blue-700 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                        >
                                            <BsGoogle className='className="w-4 h-4"' />
                                        </button>
                                    </div>
                                    <div
                                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                    >
                                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                                    </div>


                                    <div className="mb-6">
                                        <input onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Email address"
                                        />
                                    </div>


                                    <div className="mb-6">
                                        <input onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="text-center lg:text-left">
                                        <button
                                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Login
                                        </button>
                                        <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                            Don't have an account?
                                            <Link
                                                to="/signup"
                                                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                            > Register</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Signin

