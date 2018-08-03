import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Judul from './titlecontent/Title';
import '../styles/Feature.css';

export default class Feature extends React.Component {
  render() {
    return (
      <Container className="container-margin" id="feature">
        <Row className="container-title">
          <Judul Judulnya="This Is What We Offer You" />
          <Col>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia est<br /> deserunt mollit anim laborum. Sed perspiciatis
            unde omnis iste natus.
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col md={{ size: 3 }} className="container-margin-icon">
            <div className="icon-feature">
              <i className="fa fa-desktop fa-7x" />
            </div>
            <h4 className="feature-icon-title">Belajar Intensif Pemrograman</h4>
            <p className="feature-icon-subtitle">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>
          </Col>
          <Col md={{ size: 3 }} className="container-margin-icon">
            <div className="icon-feature">
              <i className="fa fa-book fa-7x" />
            </div>
            <h4 className="feature-icon-title">Penuh dengan kegiatan agama</h4>
            <p className="feature-icon-subtitle">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>
          </Col>
          <Col md={{ size: 3 }} className="container-margin-icon">
            <div className="icon-feature">
              <i className="fa fa-building fa-7x" />
            </div>
            <h4 className="feature-icon-title">Jaminan ditawari Pekerjaan</h4>
            <p className="feature-icon-subtitle">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
