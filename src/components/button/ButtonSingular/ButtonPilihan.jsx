import React from 'react';
import { Button } from 'reactstrap';
import Aux from '../../../hoc/Auxiliary';
import '../../../styles/Content.css';

const Tombol = props => {
  return (
    <Aux>
      {props.data.map((datum, key) => {
        return (
          <Button
            outline
            key={key}
            color="secondary"
            className="nav-button content-category-button">
            {props.data[key]}
          </Button>
        );
      })}
    </Aux>
  );
};

export default Tombol;
