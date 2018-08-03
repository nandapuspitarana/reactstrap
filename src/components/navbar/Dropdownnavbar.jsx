import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Dropdownnavbar = props => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        <Link nameClass="nav-link" to={props.kategori}>
          {props.kategori}
        </Link>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Dropdownnavbar;
