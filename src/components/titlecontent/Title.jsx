import React from 'react';
import { Col } from 'reactstrap';
import '../../styles/Title.css';

const Title = props => {
  return (
    <Col xs="12" className="text-center title">
      <h2 className="title">{props.Judulnya}</h2>
      <hr className="title-line" />{' '}
    </Col>
  );
};

export default Title;
