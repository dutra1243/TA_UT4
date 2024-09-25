import React, { useState, useEffect } from 'react'

const InputDeTexto = () => {
    const [textoQueElLocoEscribe, setTexto] = useState('')
    return (
        <>
            <div className='container'>
                <input type='text' onChange={(e) => setTexto(e.target.value)} />
                <p>{textoQueElLocoEscribe}</p>
            </div>
        </>
    )
}

export default InputDeTexto;
