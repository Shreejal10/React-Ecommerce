import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db, } from "../firebase/config"
const CartProducts = ({ individualProduct }) => {
    const uid = localStorage.getItem('uid')
    const deleteProduct = async () => {
        await deleteDoc(doc(db, `${"cart-"}${uid}`, `${individualProduct.ID}`));
        window.location.reload()
    }
    return (
        <div className='py-1'>
            <li className="flex px-2 sm:px-5">
                <div className="flex items-center justify-center">
                    <img src={individualProduct.ProductImg} alt="Front of men&#039;s Basic Tee in black." className="w-14 rounded-md" />
                </div>

                <div className="ml-6 flex-1 flex flex-col">
                    <div className="flex">
                        <div className="min-w-0 flex-1">
                            <h4 className="text-sm">
                                <a href="#" className="font-medium text-gray-700 hover:text-gray-800">{individualProduct.ProductName}</a>
                            </h4>
                        </div>

                        <div className="ml-4">
                            <button type="button" className="-m-1.1 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500" onClick={deleteProduct}>
                                <span className="sr-only">Remove</span>

                                <svg className="h-4 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 pb-3 flex items-end justify-between">
                        <p className="text-sm font-medium text-gray-900">Rs. {(individualProduct.ProductPrice * individualProduct.qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default CartProducts