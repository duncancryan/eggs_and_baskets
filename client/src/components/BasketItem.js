import React, { useState } from 'react';
import BasketService from '../helpers/basket_service';
import EggService from '../helpers/egg_service';
import BasketEggs from './BasketEggs';



export default function BasketItem(props) {

    const [eggs, setEggs] = useState(props.eggs);

    function handleDragEnter(event) {
        event.preventDefault();
        return true;
    }

    function handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
    }


    function handleDrop(event) {
        const eggService = new EggService;
        const basketService = new BasketService
        console.log(event)
        let allEggs = [...eggs]
        const newEgg = eggService.getEggById(props.incoming)
        allEggs.push(newEgg);
        setEggs(allEggs);
        const payload = {}
        payload.name = props.name;
        payload.eggs = eggs
        console.log(payload);
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