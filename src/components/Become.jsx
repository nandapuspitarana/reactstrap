import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import '../styles/Become.css';

export default class Become extends Component {
  render() {
    return (
      <div id="become">
        <Container>
          <Row>
            <h2 className="become-text">
              Become A Part of Santren Koding Community Today
            </h2>
            <Button
              outline
              color="success"
              className="btn-outline-success-join nav-button nav-button-become ml-auto">
              Join Now
            </Button>{' '}
          </Row>
        </Container>
      </div>
    );
  }
}
