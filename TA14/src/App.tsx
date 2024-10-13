import { useEffect, useState } from 'react'

import './App.css'
import { ThemeContext } from './ThemeContext'
import ThemeButton from './ThemeButton'

import './customStyle.css'

function App() {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    console.log(theme)
    document.body.className = theme
  }, [theme])

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <ThemeButton />
      </ThemeContext.Provider>
    </>
  )
}

export default App
