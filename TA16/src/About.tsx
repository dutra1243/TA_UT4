import React from 'react'

import { Link } from 'react-router-dom'
import './Routes.css'


export const About = () => {
    return (
        <>
            <div className='buttonHeaders'>
                <Link to="/">
                    <button >
                        Home
                    </button>
                </Link>
                <Link to={"/contact"}>
                    <button >
                        Contact
                    </button>
                </Link>
            </div>
            <div>About</div>
        </>
    )
}


export default About