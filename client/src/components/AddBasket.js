import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import BasketService from '../helpers/basket_service';

export default function AddBasket() {

    const [name, setName] = useState("")

    const formHandler = function (event) {
        event.preventDefault();


        const basketService = new BasketService;

        const payload = {}
        payload["name"] = name;
        payload["eggs"] = []
        basketService.addBasket(payload);
        
    }

    const handleTextChange = function(input){
        setName(input)
    }



    return (
        <div>
            <h2>Add a Basket</h2>
            <form onSubmit={formHandler} href="/">
                <input type="text" placeholder="Type the name of the basket here" onChange={handleTextChange}></input>
                <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}