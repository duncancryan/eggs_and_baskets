import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../containers/HomePage';
import NavBar from '../components/NavBar';
import AddEgg from '../components/AddEgg';
import AddBasket from '../components/AddBasket';
import UpdateEgg from '../components/UpdateEgg';
import UpdateBasket from '../components/UpdateBasket';


export default function MainRouter(){

    return(
        <Router>

            <Fragment>

                <HomePage />

                <Switch>
                    <Route exact path="/add" component={AddBasket}/>
                </Switch>

            </Fragment>

        </Router>
    );
}