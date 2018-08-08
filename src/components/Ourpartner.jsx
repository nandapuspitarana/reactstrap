import React from 'react';
import Swiper from 'react-id-swiper';
import { Container, Row } from 'reactstrap';
import Judul from './titlecontent/Title';
import '../styles/swiper.css';
import '../styles/Ourpartner.css';

export default class Example extends React.Component {
  render() {
    const params = {
      slidesPerView: 4,
      spaceBetween: 50,
      loop: true,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    };

    return (
      <Container id="ourpartner">
        <Row className="container-title">
          <Judul Judulnya="Our Partner" />
        </Row>
        <Swiper {...params}>
          <div>
            <img
              src="https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png"
              alt="img2"
              class="img-fluid galleryedit"
            />
          </div>
          <div>
            <img
              src="http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png"
              alt="img2"
              class="img-fluid galleryedit"
            />
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg"
              alt="img2"
              class="img-fluid galleryedit"
            />
          </div>
          <div>
            <img
              src="http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358"
              alt="img2"
              class="img-fluid galleryedit"
            />
          </div>
          <div>
            <img
              src="https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png"
              alt="img2"
              class="img-fluid galleryedit"
            />
          </div>
        </Swiper>
      </Container>
    );
  }
}
