import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Dropdownnavbar = props => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {props.kategori}
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
