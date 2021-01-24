import React, {Component} from 'react';
import BasketItem from './BasketItem';

export default class BasketList extends Component {
    constructor(props){
        super(props)

        // State
        this.state = {
            sortedBaskets: [],
            sorted: false,
            filteredBaskets: [],
            filtered: false
        }

        // Binds
        this.sortByName = this.sortByName.bind(this);
        this.filterByName = this.filterByName.bind(this);
    }


    // Conditional Rendering (for the time being)
    displayState(){
        const basketNodes = this.props.baskets.map(basket => {
            return <BasketItem key={basket._id} name={basket.name} eggs={basket.eggs} incoming={this.props.incomingEggID} />
        })
        const afterSort = this.state.sortedBaskets.map(basket => {
            return <BasketItem key={basket._id} name={basket.name} eggs={basket.eggs} incoming={this.props.incomingEggID} />
        })
        const afterFilter = this.state.filteredBaskets.map(basket => {
            return <BasketItem key={basket._id} name={basket.name} eggs={basket.eggs} incoming={this.props.incomingEggID} />
        })
        if (this.state.sorted && this.state.filtered){
            return afterFilter;
        }
        if (this.state.sorted && !this.state.filtered){
            return afterSort;
        }
        return basketNodes;
    }

    sortByName(){
        let toSort = [...this.props.baskets];
        toSort.sort((a,b) => {
          if (a.name < b.name){
              return -1;
          }
          if (a.name > b.name){
              return 1;
          }
          return 0
          
        })
        this.setState({ sortedBaskets: toSort})
        this.setState({sorted: true})
    }

    filterByName(input){
        const toFilter = [...this.props.baskets];
        let filtered = [];
        for (let basket of toFilter){
            const casedName = basket.name.toLowerCase();
            if (casedName.indexOf(input.target.value.toLowerCase()) > -1){
                filtered.push(basket);
            }
        }
        this.setState({filteredBaskets: filtered})
        this.setState({filtered: true})
    }
    
    // Render
    render(){
        return (
            <div>
                <h2>Baskets</h2>
                <input type="text" placeholder="Filter by name..." onChange={this.filterByName}/>
                <button onClick={this.sortByName}>Sort</button>
                {this.displayState()}
            </div>
        )
    }
}