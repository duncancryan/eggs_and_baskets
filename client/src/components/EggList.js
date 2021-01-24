import React, { Component } from 'react';
import EggItem from './EggItem';

export default function EggList(props) {

    const eggNodes = props.eggs.map(egg => {
        return <EggItem id={egg._id} weight={egg.weight} laid={egg.laid} />
    })

    // Render
    return (
        <div>
            <h2>Loose Eggs</h2>
            {eggNodes}
        </div>
    )
    
}