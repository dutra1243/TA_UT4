import React, { useContext } from 'react'
import { useState } from 'react'
import Context from './Context'

export const UserInput = () => {

    const [name, setInput] = useContext(Context)

    return (
        <>
            <input type="text" onChange={(event) => setInput(event.target.value)} />
        </>
    )
}


export default UserInput