import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

const Contador = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {

        document.title = `Contador: ${count}`
        console.log(`Contador: ${count}`)

    }, [count])

    return (
        <>
            <h1> Contador: {count} </h1>
            <button onClick={() => setCount((count) => count + 1)}> +1 </button>
            <button onClick={() => setCount((count) => count - 1)}> -1 </button>
        </>
    )
}

export default Contador;