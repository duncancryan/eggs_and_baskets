import React from 'react';
import EggList from './EggList';

export default function BasketItem(props) {

    return (
        <div>
            <h4>{props.name}</h4>
            <EggList eggs={props.eggs}/>
        </div>
    )
}