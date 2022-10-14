import { React, useState } from 'react'
import { storage, db } from '../firebase/config'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { v4 } from 'uuid'

const AddProduct = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    const addProduct = (e) => {
        e.preventDefault();
        // console.log(productName, productPrice, productImg);
        const storageRef = ref(storage, `product-images/${productImg.name}`);
        const uploadTask = uploadBytesResumable(storageRef, productImg)
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        }, err => {
            setError(err.message)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                setDoc(doc(db, "Products", `${v4()}`), {
                    ProductName: productName,
                    ProductPrice: Number(productPrice),
                    ProductImg: url
                }).then(() => {
                    setProductName('');
                    setProductPrice(0);
                    setProductImg(null);
                    setError('');
                    document.getElementById('file').value = '';
                }).catch(err => setError(err.message))
            })
        })

    }
    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        }
        else {
            setProductImg(null);
            setError("Please add a valid image type: png/jpeg/jpg")
        }
    }
    return (
        <>
            <section className="text-gray-600 body-font h-[85vh]  flex justify-center items-center">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Product</h1>
                    </div>
                    <div >
                        {error && <div className='text-center py-2 px-3 mb-4 bg-red-400  text-gray-900'>{error}</div>}
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form className="flex flex-wrap -m-2" autoComplete='off' onSubmit={addProduct}>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="product-name" className="leading-7 text-sm text-gray-800">Product Name</label>
                                    <input onChange={(e) => setProductName(e.target.value)} value={productName} type="text" id="name" name="product-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="product-price" className="leading-7 text-sm text-gray-600">Price</label>
                                    <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} type="number" id="price" name="product-price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="product-img" className="leading-7 text-sm text-gray-600">Product Image</label>
                                    <input onChange={productImgHandler} type="file" id="file" name="product-file" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  h-12  outline-none text-gray-700 py-1 px-3 " />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">Add Product</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProduct