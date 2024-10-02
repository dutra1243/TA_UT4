import React from 'react';
import { useState } from 'react';

import './App.css';

const BotonTexto = () => {

    const [flag, changeFlag] = useState(false);

    const handleClick = () => {
        if (flag) {
            document.getElementById('textHidden')!.classList.add('hidden');
        } else {
            document.getElementById('textHidden')!.classList.remove('hidden');
        }
        changeFlag(!flag);

    }
    return (
        <>
            <button onClick={handleClick}>Click Me!!!!</button>
            <p id="textHidden" className='hidden'>Now you see me!!!</p>
        </>
    )
}

export default BotonTexto;