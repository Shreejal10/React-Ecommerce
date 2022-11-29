import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db, } from "../firebase/config"
import CartProducts from "../components/CartProducts";
import { v4 } from 'uuid'
import { useNavigate } from "react-router-dom"
function Cart() {
    const navigate = useNavigate()
    const [product, setProduct] = useState([]);
    const uid = localStorage.getItem('uid')
    const getProducts = async () => {
        const colRef = collection(db, `${"cart-"}${uid}`);
        const product = await getDocs(colRef);
        const productsArray = [];
        product.forEach(doc => {
            let data = doc.data();
            let id = doc.id;
            productsArray.push({
                ...data
            })
            if (productsArray.length === product.docs.length) {
                setProduct(productsArray);
            }
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    const totalPrice = product.map((cartProduct) => {
        return cartProduct.TotalProductPrice
    })
    const deleteProduct = product.map((cartProduct) => {
        return cartProduct.ID
    })
    const reducerOfPrice = (accumulator, currentValue) => accumulator + currentValue;
    const Price = totalPrice.reduce(reducerOfPrice, 0)
    let shipping = (Price * 0.5) / 100
    let taxes = (Price * 5) / 100
    let Total = Price + taxes + shipping

    // console.log(deleteProduct);
    const checkout = async () => {
        alert("Your order has been confirmed")
        for (let i = 0; i < product.length; i++) {
            await deleteDoc(doc(db, `${"cart-"}${uid}`, `${deleteProduct[i]}`));
        }
        navigate("/")
        window.location.reload()

    }
    return (
        <>
            <div className="min-h-[85vh]">
                {product.length < 1 && (<div className='h-[85vh] flex items-center justify-center gap-2'>No products in cart</div>)}
                {product.length > 0 && (
                    <div className="max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <h2 className="text-center font-bold text-3xl mb-6">Cart</h2>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                            <div className="mt-10 lg:mt-0">
                                <h2 className="text-lg font-medium text-gray-900">Products</h2>
                                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {product.map((individualProduct) => (
                                            <CartProducts key={v4()} individualProduct={individualProduct} />
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 lg:mt-0">
                                <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
                                <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">

                                    <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <dt className="text-sm">Subtotal</dt>
                                            <dd className="text-sm font-medium text-gray-900">Rs. {(Price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="text-sm">Shipping</dt>
                                            <dd className="text-sm font-medium text-gray-900">Rs. {(shipping).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className="text-sm">Taxes</dt>
                                            <dd className="text-sm font-medium text-gray-900">Rs. {((taxes)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</dd>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                            <dt className="text-base font-medium">Total</dt>
                                            <dd className="text-base font-medium text-gray-900">Rs. {(Total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</dd>
                                        </div>
                                    </dl>

                                    <div type='button' className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                        <button className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" onClick={checkout}>Confirm order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
