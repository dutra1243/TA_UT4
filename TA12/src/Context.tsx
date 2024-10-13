import React, { createContext } from 'react'

interface UserProps {
    name: string
}

export const Context = createContext<UserProps | undefined>(undefined)



export default Context