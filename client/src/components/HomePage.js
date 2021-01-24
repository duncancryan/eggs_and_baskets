import React, { Fragment } from 'react'; 
import EggList from '../containers/EggList';
import BasketList from '../containers/BasketList';

export default function HomePage() {

    return (
        <Fragment>
            <div>
                <EggList/>
            </div>
            <div>
                <BasketList/>
            </div>
            <a href="/add">
                <button>Add Basket</button>
            </a>
        </Fragment>
    )    
}