import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            <Link to={'/product/1'}>
                <button>Product 1</button>
            </Link>
            <Link to={'/product/2'}>
                <button>Product 2</button>
            </Link>
            <Link to={'/product/3'}>
                <button>Product 3</button>
            </Link>
        </>
    )
}


export default Products