import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogContext } from './App'

export const Home = () => {

    const [user, setUser] = useContext(LogContext)

    const [text, setText] = useState("")

    const handleLog = () => {
        setUser(user === "admin" ? "" : "admin")
    }

    useEffect(() => {
        setText(user === "admin" ? "Log out" : "Log in")
    }, [user])

    return (
        <>
            <div>
                <button onClick={handleLog}>{text}</button>
            </div >
            <Link to={'/about'}>
                <button>About</button>
            </Link>
            <Link to={'/products'}>
                <button>Products</button>
            </Link>

        </>
    )
}

export default Home  