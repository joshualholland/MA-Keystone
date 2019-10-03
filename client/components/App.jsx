import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './Global/Navbar';
import Home from './Home/Home';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </>
            </Router>
        )
    }
}