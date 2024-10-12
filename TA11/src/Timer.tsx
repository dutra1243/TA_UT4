import React, { useEffect } from 'react'

import { useState } from 'react'

export const Timer = () => {

    const [time, setTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h1>{time}</h1>
        </>
    )
}


export default Timer
