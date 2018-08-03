import React, { Component } from 'react';
import Judul from './titlecontent/Title';
import { Container, Row } from 'reactstrap';

export default class Ourpartner extends Component {
  render() {
    return (
      <div id="Ourpartner">
        <Container>
          <Row className="container-title">
            <Judul Judulnya="Our Partner" />
          </Row>
        </Container>
      </div>
    );
  }
}
