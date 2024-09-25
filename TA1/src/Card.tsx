import React from 'react';
import { ICardStuff } from './ICardStuff';

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="cardStyle">
                {children}
            </div>
        </>
    )
}

export default Card;