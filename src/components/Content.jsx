import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Judul from './titlecontent/Title';
import Cardkajian from './card/Cardkajian';
import axios from 'axios';
import Tombol from './button/ButtonSingular/ButtonPilihan';

export default class Content extends Component {
  state = {
    data: [],
    Loader: false,
    kategori: ['AMP', 'REACTJS', 'REMOTE WORKING', 'GIT', 'WORDPRESS']
  };

  componentDidMount = () => {
    axios
      .get('https://abuadzhan.com/wp-json/wp/v2/posts/?per_page=3')
      .then(response => {
        this.setState({ data: response.data, Loader: true });
      });
  };

  render() {
    return (
      <div id="Content">
        <Container>
          <Row className="container-title">
            <Judul Judulnya="Popular Courses" />
          </Row>
          <Row className="container-title-button">
            <Tombol data={this.state.kategori} />
          </Row>
          <Row>
            <Container fluid className="container-margin" id="feature">
              <Row className="container-card justify-content-around">
                {this.state.Loader ? (
                  <Cardkajian data={this.state.data} />
                ) : (
                  <h1>Loading . . .</h1>
                )}
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}
