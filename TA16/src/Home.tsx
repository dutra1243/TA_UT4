import React from 'react'
import { Link } from 'react-router-dom'
import './Routes.css'

export const Home = () => {
    return (
        <>
            <div className='buttonHeaders'>
                <Link to={"/about"}>
                    <button >
                        About
                    </button>
                </Link>
                <Link to={"/contact"}>
                    <button >
                        Contact
                    </button>
                </Link>
            </div>
            <div>Home</div>
        </>
    )
}


export default Home