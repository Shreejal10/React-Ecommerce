import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"
const Home = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const colRef = collection(db, "Products");
        const products = await getDocs(colRef);
        const productsArray = [];
        products.forEach(doc => {
            let data = doc.data();
            let id = doc.id;
            productsArray.push({
                ...data
            })
            if (productsArray.length === products.docs.length) {
                setProducts(productsArray);
            }
        })
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            {products.length < 1 && (<div className='h-[85vh] flex items-center justify-center'>Loading products......... </div>)}
            {products.length > 0 && (
                <div className='' >
                    <h1 className='font-bold text-4xl text-center mt-5'>Featured Products</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 gap-8'>
                        <Card products={products} />
                    </div>
                </div>
            )}
        </>

    )
}

export default Home
