import React, { Component } from 'react';
import Navigasi from '../components/navbar';
import Mainhero from '../components/jumbotron';
import Feature from '../components/Feature';
import Content from '../components/Content';
import OurPartner from '../components/Ourpartner';
import Become from '../components/Become';

class Homepage extends Component {
  render() {
    return (
      <div className="default">
        <Navigasi />
        <Mainhero />
        <Feature />
        <Content />
        <OurPartner />
        <Become />
      </div>
    );
  }
}

export default Homepage;
