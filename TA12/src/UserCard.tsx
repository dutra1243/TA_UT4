import React, { useContext } from 'react'
import Context from './Context'

export const UserCard = () => {

    const user = useContext(Context)

    return (
        <div>{user?.name}</div>
    )
}
