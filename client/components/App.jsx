import React from 'react';
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './Global/Navbar';
import Home from './Home/Home';

class App extends React.Component {
    render() {
        return (
            <Router>
                <>
                    {/* <Navbar /> */}
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default hot(module)(App);