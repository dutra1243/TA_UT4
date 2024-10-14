import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Product = () => {

    const id = useParams().id

    switch (id) {

        case '1':
            return (
                <>
                    <h1>Product 1</h1>
                    <Link to={'/'}>
                        <button>Back</button>
                    </Link>
                </>
            )
        case '2':
            return (
                <>
                    <h1>Product 2</h1>
                    <Link to={'/'}>
                        <button>Back</button>
                    </Link>
                </>
            )
        case '3':
            return (
                <>
                    <h1>Product 3</h1>
                    <Link to={'/'}>
                        <button>Back</button>
                    </Link>
                </>
            )
        default:
            return (
                <>
                    <h1>Product not found</h1>
                    <Link to={'/'}>
                        <button>Back</button>
                    </Link>
                </>
            )
    }
}



export default Product