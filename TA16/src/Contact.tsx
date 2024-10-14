import React from 'react'

import { Link } from 'react-router-dom'
import './Routes.css'

export const Contact = () => {
    return (
        <>
            <div className='buttonHeaders'>
                <Link to="/">
                    <button >
                        Home
                    </button>
                </Link>
                <Link to={"/about"}>
                    <button >
                        About
                    </button>
                </Link>
            </div >
            <div>Contact</div>
        </>
    )
}


export default Contact