import React, { createContext } from 'react'


export interface UserProps {
    name: string
    //nsetInput: () => void
}

export const Context = createContext<any>(null)



export default Context