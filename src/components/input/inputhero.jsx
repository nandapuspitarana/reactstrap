import React from 'react';
import { FormGroup, Input, Button } from 'reactstrap';
import Aux from '../../hoc/Auxiliary';

export default class Masukan extends React.Component {
  render() {
    return (
      <Aux>
        <FormGroup className="container-search-hero">
          <Input className="input-search-hero" placeholder="Search here" />
          <Button color="success" className="hero-button">
            Search
          </Button>{' '}
        </FormGroup>
      </Aux>
    );
  }
}
