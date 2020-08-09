import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Button = ({size, heading, item1, item2, item3, item4}) => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggle = () => setOpen(!dropdownOpen);
  
    return (
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret size={size} color="warning">
          {heading}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >{item1}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>{item2}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>{item3}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>{item4}</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
  
  export default Button;