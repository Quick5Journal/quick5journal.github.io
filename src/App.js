import React, { Component, Fragment } from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './containers/Home'
import MyJournal from './containers/MyJournal'

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Fragment>
                        <Route exact path="/" component={Home}/>
                        <Route path="/myjournal" component={MyJournal}/>
                    </Fragment>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
