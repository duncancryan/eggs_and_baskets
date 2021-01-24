import React from 'react';
import BasketEggs from './BasketEggs';

export default function BasketItem(props) {

    return (
        <div>
            <h4>{props.name}</h4>
            <BasketEggs eggs={props.eggs}/>
        </div>
    )
}