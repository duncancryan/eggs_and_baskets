import React, { Component, useState } from 'react';
import BasketService from '../helpers/basket_service';
import EggService from '../helpers/egg_service';
import BasketEggs from './BasketEggs';



export default class BasketItem extends Component {
    constructor(props){
        super(props)

        // State
        this.state ={
            newEgg:{},
            eggs: []
        }

        this.handleDragEnter = this.handleDragEnter.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.buildPayload = this.buildPayload.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }


    

    handleDragEnter(event) {
        event.preventDefault();
        return true;
    }

    handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
    }


    buildPayload(payloadEgg){
        const payload = {}
        payload["name"] = this.props.name;
        payload["eggs"] = this.state.eggs
        console.log("payload", payload);
    }

    // addEggtoEggs(){
    //     let allEggs = [...eggs];
    //     allEggs.push(newEgg)
    //     console.log("allEggs", allEggs);
    //     setEggs(allEggs);
    //     console.log("eggs", eggs);
    // }

    async handleDrop(event) {
        console.log("drop", event);
        const eggService = new EggService;

         
        eggService.getEggById(this.props.incoming)
        .then(data => this.setState({newEgg: data}))

        console.log("newEgg", this.state.newEgg);

        // addEggtoEggs();

        // buildPayload();
        
        // basketService.updateBasket(props.id, payload);
        // eggService.deleteEggById(props.incoming)
        // the code to remove the egg fro the egg collection and add it to this basket's egg
        // array will be contained here

        // there also needs to be some logic to reset the state in HomePage
    }
    render(){
        return (
            <div onDragEnter={this.handleDragEnter} onDrop={this.handleDrop} onDragOver={this.handleDragOver}>
                <h4>{this.props.name}</h4>
                <BasketEggs eggs={this.props.eggs} />
            </div>
        )
    }
}