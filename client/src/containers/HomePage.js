import React, { Component, Fragment } from 'react'; 
import EggList from '../components/EggList';
import BasketList from '../components/BasketList';
import EggService from '../helpers/egg_service';
import BasketService from '../helpers/basket_service';


export default class HomePage extends Component {
    constructor(props){
        super(props)

        // State
        this.state = {
            eggs: [],
            baskets: []
        }
    }

    // Methods
    componentDidMount(){
        const eggService = new EggService();

        eggService.getEggs()
            .then(data => this.setState({ eggs: data })); 
            
        const basketService = new BasketService();

        basketService.getBaskets()
            .then(data => this.setState({ baskets: data }));
    }


    render(){
        return (
            <Fragment>
                <div>
                    <h2>Loose Eggs</h2>
                    <EggList eggs={this.state.eggs}/>
                </div>
                <div>
                    <BasketList baskets={this.state.baskets}/>
                </div>
                <a href="/add">
                    <button>Add Basket</button>
                </a>
            </Fragment>
        )    
    }
}