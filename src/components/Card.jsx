import React from 'react'
import Product from './Product';
import { v4 } from 'uuid'
const Card = ({ products, addToCart }) => {
    return products.map((individualProduct) => (
        <Product key={v4()} individualProduct={individualProduct} addToCart={addToCart} />
    ))
}

export default Card