import React from 'react'
import './App.css'

export interface IPersona {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

}
export const Persona = (props: IPersona) => {
    return (
        <div className='card'>
            <h1>Name: {props.name}</h1>
            <p>UserName: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>Phone Number: {props.phone}</p>
            <p>WebSite: {props.website}</p>

            <p>Address: {props.address.street}, {props.address.suite}, {props.address.city}, {props.address.zipcode}</p>
            <p>Geo: {props.address.geo.lat}, {props.address.geo.lng}</p>
            <p>Company: {props.company.name}, {props.company.catchPhrase}, {props.company.bs}</p>
        </div>
    )
}


export default Persona