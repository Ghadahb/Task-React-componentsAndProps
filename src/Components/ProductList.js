import React from 'react'
import Product from './Product'
import productsData from '../Product'

export default function Productlist () {


    const Productlist = productsData.map(product => <Product product={product} />)
        

    return (
        <div className="product-list">
            {Productlist}
        </div>
    )
}

