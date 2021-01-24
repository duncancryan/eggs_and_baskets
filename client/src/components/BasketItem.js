import React, { useState } from 'react';
import BasketService from '../helpers/basket_service';
import EggService from '../helpers/egg_service';
import BasketEggs from './BasketEggs';



export default function BasketItem(props) {

    const [eggs, setEggs] = useState(props.eggs);
    const [newEgg, setNewEgg] = useState()

    function handleDragEnter(event) {
        event.preventDefault();
        return true;
    }

    function handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
    }


    function buildPayload(payloadEgg){
        const payload = {}
        payload["name"] = props.name;
        payload["eggs"] = eggs
        console.log("payload", payload);
    }

    function addEggtoEggs(){
        let allEggs = [...eggs];
        allEggs.push(newEgg)
        console.log("allEggs", allEggs);
        setEggs(allEggs);
        console.log("eggs", eggs);
    }

    function handleDrop(event) {
        const eggService = new EggService;

        eggService.getEggById(String(props.incoming))

        .then(data => setNewEgg(data))
        console.log("newEgg", newEgg);

        addEggtoEggs();

        buildPayload();
        
        // basketService.updateBasket(props.id, payload);
        // eggService.deleteEggById(props.incoming)
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