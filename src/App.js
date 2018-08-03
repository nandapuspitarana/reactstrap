import React, { Component } from 'react';
import './styles/App.css';
import Homepage from './containers/Homepage';
import Courses from './containers/Courses';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="default">
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </div>
    );
  }
}

export default App;
