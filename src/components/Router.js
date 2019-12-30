import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Film from './Film';

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact></Route>
            <Route path="/film/:id" component={Film}></Route>
        </Switch>
    </BrowserRouter>

);

export default Router;