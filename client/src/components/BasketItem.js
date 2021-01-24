import React from 'react';
import BasketEggs from './BasketEggs';



export default function BasketItem(props) {

    function handleDragEnter(event) {
        event.preventDefault();
        return true;
    }

    function handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
    }


    function handleDrop(event) {
        console.log(event)
        
        // the code to remove the egg fro the egg collection and add it to this basket's egg
        // array will be contained here

        // there also needs to be some logic to reset the state in HomePage
    }

    return (
        <div onDragEnter={handleDragEnter} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h4>{props.name}</h4>
            <BasketEggs eggs={props.eggs} />
        </div>
    )
}