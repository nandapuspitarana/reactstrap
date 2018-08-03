import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col
} from 'reactstrap';
import Aux from '../../hoc/Auxiliary';

const Cardkajian = props => {
  console.log(props);
  return (
    <Aux>
      {props.data.map((datum, key) => {
        return (
          <Col md={{ size: 4 }}>
            <Card className="card" key={key}>
              <CardImg
                className="card-list"
                top
                width="100%"
                src=""
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{datum.title.rendered}</CardTitle>
                <CardText>{datum.excerpt.rendered}</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Aux>
  );
};

export default Cardkajian;
