import React from 'react'

import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <div>About</div>
        </>
    )
}


export default About