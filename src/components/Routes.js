import {Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import Library from './Library';
import SecondPage from './SecondPage';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact={true} path='/library' component={Library}/>
                    <Route exact={true} path='/secondpage' component={SecondPage}/>
                </Switch>
            </div>
        );
    }
}
