import React, {Component} from 'react';
import BasketItem from './BasketItem';

export default function BasketList(props) {

    const basketNodes = props.baskets.map(basket => {
        return <BasketItem id={basket._id} name={basket.name} eggs={basket.eggs} />
    })

    // Render
    return (
        <div>
            <h2>Baskets</h2>
            {basketNodes}
        </div>
    )
}