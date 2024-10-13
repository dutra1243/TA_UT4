import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeButton = () => {

    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
            <button onClick={() => setTheme('light')}>Light Mode</button>
        </>
    )
}


export default ThemeButton