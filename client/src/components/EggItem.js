import React from 'react';

export default function EggItem(props){

    return (
        <div>
            <p>Weight: {props.weight}g</p>
            <p>Laid on: {props.laid}</p>
        </div>
    )
}