import React, { useContext } from 'react'
import Context from './Context'

export const UserCard = () => {

    const [name, setInput] = useContext(Context)

    return (
        <div>
            {name}
        </div>
    )
}
