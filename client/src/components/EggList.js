import React, { Component, Fragment } from 'react';
import EggItem from './EggItem';

export default class EggList extends Component {
    constructor(props){
        super(props)

        // State
        this.state = {
            sortedEggs: [],
            sorted: false,
            filteredEggs: [],
            filteredByWeight: false,
            weightLow: 0,
            weightHigh: 10000,
            filteredByDate: false,
            dateHigh: new Date(),
            dateLow: new Date(1, 1, 1)
        }

        // Binds
        this.sortByDateLaid = this.sortByDateLaid.bind(this);
        this.sortByWeight = this.sortByWeight.bind(this);
        this.filterByWeight = this.filterByWeight.bind(this);
        this.handleHighWeight = this.handleHighWeight.bind(this);
        this.handleLowWeight = this.handleLowWeight.bind(this);
        this.handleLowDate = this.handleLowDate.bind(this);
        this.handleHighDate = this.handleHighDate.bind(this);

    }

    displayState(){
        const eggNodes = this.props.eggs.map(egg => {
            return <EggItem key={egg._id} weight={egg.weight} laid={egg.laid} />
        })
        const afterSort = this.state.sortedEggs.map(egg => {
            return <EggItem key={egg._id} weight={egg.weight} laid={egg.laid} />
        })
        const weightFiltered = this.state.filteredEggs.map(egg => {
            return <EggItem key={egg._id} weight={egg.weight} laid={egg.laid} />
        })
        if (this.state.sorted && (!this.state.filteredByDate && !this.state.filteredByWeight)) {
            return afterSort;
        }
        if (this.state.filteredByWeight){
            return weightFiltered;
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

    filterByWeight(){
        const toFilter = [...this.props.eggs];
        let filtered = toFilter.filter(egg => {
          return egg.weight > this.state.weightLow && egg.weight < this.state.weightHigh;
        })
        this.setState({filteredEggs: filtered})
    }

    handleHighWeight(input){
        this.setState({weightHigh: input.target.value})
        this.setState({ filteredByWeight: true })
        this.filterByWeight();
        if (!input.target.value){
            this.setState({weightHigh: 10000})
            this.filterByWeight();
        }
    }
    handleLowWeight(input){
        this.setState({weightLow: input.target.value})
        this.setState({filteredByWeight: true})
        this.filterByWeight();
        if (!input.target.value) {
            this.setState({ weightHigh: 0 })
            this.filterByWeight();
        }
    }

    handleHighDate(input){
        let inputDate = input.target.value
        let parameterized = inputDate.split("-").reverse();
        if (!input.target.value){
            this.setState({dateHigh: new Date()})
        } else {
        this.setState({dateHigh: new Date(parameterized[2], parameterized[1], parameterized[0])})
        }
    }
    handleLowDate(input){
        let inputDate = input.target.value
        let parameterized = inputDate.split("-").reverse();
        if (!input.target.value) {
            this.setState({ dateLow: new Date(1,1,1) })
        } else {
        this.setState({ dateHigh: new Date(parameterized[2], parameterized[1], parameterized[0]) })        
        }
    }


    // Render
    render(){
        return (
            <Fragment>
                <div>
                <input type="number" placeholder="Filter by weight above..." onChange={this.handleLowWeight} />
                <input type="number" placeholder="Filter by weight below..." onChange={this.handleHighWeight} />
                </div>
                <div>
                <input type="date" placeholder="Filter by date after..." onChange={this.handleLowDate} />
                <input type="date" placeholder="Filter by date before..." onChange={this.handleHighDate} />
                </div>
              <button onClick={this.sortByWeight}>Sort by Weight</button>
                <button onClick={this.sortByDateLaid}>Sort by Date Laid</button>
                {this.displayState()}
            </Fragment>
        )
        }
    
}