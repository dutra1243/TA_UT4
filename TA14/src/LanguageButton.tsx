import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export const LanguageButton = () => {

    const [language, setLanguage] = useContext(LanguageContext)

    return (
        <>
            <button onClick={() => setLanguage('Hola soy joaco (sonido nasal)!')}>Español</button>
            <button onClick={() => setLanguage('Hi i\'m Joe Biden and this is minecraft parkour!!!')}>English</button>
            <button onClick={() => setLanguage('Cidade De Deus é um ótimo filme.')}>Português</button>
        </>
    )
}


export default LanguageButton