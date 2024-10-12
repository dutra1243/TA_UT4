import React from 'react'

import { Persona } from './Persona'
import { useState, useEffect } from 'react'

export const APICaller = (route: { route: string }) => {

    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch(route.route, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [route.route]);


    return (
        <>
            {data && data.map((data: any) => <Persona key={data.id} {...data} />)}
        </>
    )
}

export default APICaller