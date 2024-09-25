import React from 'react';
import { ICardStuff } from './ICardStuff';

export const Card = (cardStuff: ICardStuff) => {
    return (
        <>
            <div className="cardStyle">

                <p>{cardStuff.title}</p>
                <p>{cardStuff.description}</p>
                <p>{cardStuff.assignedTo}</p>
                <p>{cardStuff.startDate}</p>
                <p>{cardStuff.endDate}</p>
                <br />
            </div>
        </>
    )
}

export default Card;