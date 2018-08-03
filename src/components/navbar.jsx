import React from 'react';
import logo from '../Images/logo.png';
import '../styles/Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Tombol from './button/Greenoutlinebutton';
import Dropdowntest from './navbar/Dropdownnavbar';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" className="edit-nav">
          <NavbarBrand href="/">
            <img src={logo} alt="we are" className="logo-brand" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Dropdowntest kategori="HOME" />
              <Dropdowntest kategori="COURSES" />
              <Dropdowntest kategori="EVENTS" />
              <Dropdowntest kategori="PAGES" />
              <Dropdowntest kategori="BLOG" />
            </Nav>
            <Nav navbar>
              <NavItem className="registerlogin">
                <NavLink href="/home/">REGISTER</NavLink>
              </NavItem>
              <NavItem className="slashlogin d-none d-md-block">
                <NavLink>/</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/home/">LOGIN</NavLink>
              </NavItem>
              <Tombol />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
