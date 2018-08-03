import React from 'react';
import { Button } from 'reactstrap';
import Aux from '../../hoc/Auxiliary';

export default class Tombol extends React.Component {
  render() {
    return (
      <Aux>
        <Button outline color="success" className="nav-button">
          CONTACT
        </Button>{' '}
      </Aux>
    );
  }
}
