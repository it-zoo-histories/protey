import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../../containers/MainPage';

export default function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </BrowserRouter>
    )
}