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
            baskets: [],
            dragID: ""
        }

        // Binds
        this.handleDragStart = this.handleDragStart.bind(this);
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

    handleDragStart(data){
        this.setState({dragID: data})
    }


    render(){
        return (
            <Fragment>
                <div>
                    <h2>Loose Eggs</h2>
                    <EggList eggs={this.state.eggs} DragStart={this.handleDragStart}/>
                </div>
                <div>
                    <BasketList baskets={this.state.baskets} incomingEggID={this.state.dragID}/>
                </div>
                <a href="/add">
                    <button>Add Basket</button>
                </a>
            </Fragment>
        )    
    }
}