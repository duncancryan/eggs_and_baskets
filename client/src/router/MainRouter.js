import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import AddBasket from '../components/AddBasket';




export default function MainRouter() {

    return (
        <Router>

            <Fragment>

                <Switch>
                    <HomePage exact path="/" component={HomePage} />
                </Switch>

                <Switch>
                    <Route exact path="/add" component={AddBasket} />
                </Switch>

            </Fragment>

        </Router>
    );
}