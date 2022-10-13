import React from 'react'

const AddProduct = () => {
    const addProduct = () => {
        console.log("hi");
    }
    const productImgHandler = () => {

    }
    return (
        <>
            <section className="text-gray-600 body-font h-[85vh] bg-red-300 flex justify-center items-center">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Product</h1>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form className="flex flex-wrap -m-2" autoComplete='off' onSubmit={addProduct}>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="product-name" className="leading-7 text-sm text-gray-600">Product Name</label>
                                    <input type="text" id="name" name="product-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="product-price" className="leading-7 text-sm text-gray-600">Price</label>
                                    <input type="number" id="price" name="product-price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="product-img" className="leading-7 text-sm text-gray-600">Product Image</label>
                                    <input type="file" id="file" name="product-file" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  h-12  outline-none text-gray-700 py-1 px-3 " onChange={productImgHandler} />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Product</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct