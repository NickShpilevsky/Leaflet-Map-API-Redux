import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Authorization, MapComponent, About } from './Pages'
import Header from "./Static/Header";

const App = (props) => {

    return(
      <Router>
        <Header />
        <Switch>
          <Route exact path="/auth">
            <Authorization />
          </Route>
          <Route exact path="/map">
            <MapComponent/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        {
          props.store.authorized ? <Redirect to="/map" /> : <Redirect to="/auth" />
        }
      </Router>
    )
};

export default connect(store => ({store}))(App);