import React, { Component } from 'react';
import './styles/App.css';
import Navigasi from './components/navbar';
import Mainhero from './components/jumbotron';
import Feature from './components/Feature';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="default">
        <Navigasi />
        <Mainhero />
        <Feature />
        <Content />
      </div>
    );
  }
}

export default App;
