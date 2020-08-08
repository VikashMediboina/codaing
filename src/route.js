import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './components/home'
import Indvidual from './components/indvidual'


export class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/iteam/:id" render={(props) => <Indvidual {...props} />} />
                <Route path="/home" render={(props) => <Home {...props} />} />
                <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            </div>
        )
    }
}

export default Routes
