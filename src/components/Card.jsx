import React from 'react'
import Product from './Product';
import { v4 } from 'uuid'
const Card = ({ products }) => {
    console.log(products);
    return products.map((individualProduct) => (
        <Product key={v4()} individualProduct={individualProduct} />
    ))
}

export default Card