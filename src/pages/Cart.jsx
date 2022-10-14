

function Cart() {

    return (
        <>
            <div className="h-[85vh]">
                <div className="max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 h-[85vh]">
                    <h2 className="text-center font-bold text-3xl">Cart</h2>
                    <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>
                                <div className="mt-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                    <div className="mt-1">
                                        <input type="email" id="email-address" name="email-address" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>
                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                        <div className="mt-1">
                                            <input type="text" id="first-name" name="first-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                        <div className="mt-1">
                                            <input type="text" id="last-name" name="last-name" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>



                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                        <div className="mt-1">
                                            <input type="text" name="address" id="address" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <div className="mt-1">
                                            <input type="text" name="city" id="city" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <div className="mt-1">
                                            <select id="country" name="country" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>Nepal</option>
                                                <option>India</option>
                                                <option>Bangladesh</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                                        <div className="mt-1">
                                            <input type="text" name="region" id="region" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal code</label>
                                        <div className="mt-1">
                                            <input type="text" name="postal-code" id="postal-code" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                        <div className="mt-1">
                                            <input type="text" name="phone" id="phone" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
                            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <ul role="list" className="divide-y divide-gray-200">
                                    <li className="flex py-6 px-4 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <img src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="w-20 rounded-md" />
                                        </div>

                                        <div className="ml-6 flex-1 flex flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a href="#" className="font-medium text-gray-700 hover:text-gray-800"> Basic Tee </a>
                                                    </h4>
                                                    <p className="mt-1 text-sm text-gray-500">Black</p>
                                                    <p className="mt-1 text-sm text-gray-500">Large</p>
                                                </div>

                                                <div className="ml-4 flex-shrink-0 flow-root">
                                                    <button type="button" className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Remove</span>

                                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex-1 pt-2 flex items-end justify-between">
                                                <p className="mt-1 text-sm font-medium text-gray-900">$32.00</p>

                                                <div className="ml-4">
                                                    <label htmlFor="quantity" className="sr-only">Quantity</label>
                                                    <select id="quantity" name="quantity" className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Shipping</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Taxes</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt className="text-base font-medium">Total</dt>
                                        <dd className="text-base font-medium text-gray-900">$75.52</dd>
                                    </div>
                                </dl>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Confirm order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Cart;
