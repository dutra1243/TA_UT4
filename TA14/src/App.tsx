import { useEffect, useState } from 'react'

import './App.css'
import { ThemeContext } from './ThemeContext'
import { LanguageContext } from './LanguageContext'

import ThemeButton from './ThemeButton'
import LanguageButton from './LanguageButton'

import './customStyle.css'


function App() {

  const [theme, setTheme] = useState('light')

  const [language, setLanguage] = useState('Hola soy joaco (sonido nasal)!')

  useEffect(() => {
    console.log(theme)
    document.body.className = theme
  }, [theme])

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <LanguageContext.Provider value={[language, setLanguage]}>
          <ThemeButton />
          <br />
          <LanguageButton />
          <p>{language}</p>

        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
