import React, { Component } from 'react';
import EggItem from './EggItem';

export default class EggList extends Component {
    constructor(props){
        super(props)

        // State
        this.state = {
            sortedEggs: [],
            sorted: false,
            filteredEggs: [],
            filtered: false
        }

        // Binds
        this.sortByDateLaid = this.sortByDateLaid.bind(this);
        this.sortByWeight = this.sortByWeight.bind(this);

    }

    displayState(){
        const eggNodes = this.props.eggs.map(egg => {
            return <EggItem key={egg._id} weight={egg.weight} laid={egg.laid} />
        })
        const afterSort = this.state.sortedEggs.map(egg => {
            return <EggItem key={egg._id} weight={egg.weight} laid={egg.laid} />
        })
        if (this.state.sorted && !this.state.filtered) {
            return afterSort;
        }
        return eggNodes;
    }

    sortByDateLaid(){
        let toSort = [...this.props.eggs];
        toSort.sort((a, b) => {
            let aSplit = a.laid.split("-")
            let bSplit = b.laid.split("-")
            console.log(aSplit);
            console.log(bSplit);
            let aDate = new Date(aSplit[2], aSplit[1], aSplit[0]);
            let bDate = new Date(bSplit[2], bSplit[1], bSplit[0]);
            if (aDate < bDate) {
                return -1;
            }
            if (aDate > bDate) {
                return 1;
            }
            return 0

        })
        this.setState({ sortedEggs: toSort })
        this.setState({ sorted: true })
    }

    sortByWeight(){
        let toSort = [...this.props.eggs];
        toSort.sort((a, b) => {
            if (a.weight < b.weight) {
                return -1;
            }
            if (a.weight > b.weight) {
                return 1;
            }
            return 0

        })
        this.setState({ sortedEggs: toSort })
        this.setState({ sorted: true })
    }


    // Render
    render(){
        return (
            <div>
                <input type="number" placeholder="Filter by weight above..." onChange={this.filterByWeight} />
                <button onClick={this.sortByWeight}>Sort by Weight</button>
                <button onClick={this.sortByDateLaid}>Sort by Date Laid</button>
                {this.displayState()}
            </div>
        )
        }
    
}