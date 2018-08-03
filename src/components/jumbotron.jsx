import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import '../styles/Jumbotron.css';
import Masukan from './input/inputhero';

const Mainhero = props => {
  return (
    <Jumbotron fluid className="main-hero main-jumbotron">
      <Container>
        <h1 className="display-3">Belajar Jadi Asyik!</h1>
        <p className="lead">
          Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren
          Koding.
        </p>
        <Masukan />
      </Container>
    </Jumbotron>
  );
};

export default Mainhero;
