import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="http://localhost:3000/" active>Email </NavLink>
          </NavItem>
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink href="http://localhost:3000/g/notes">Notes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink >Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled >Disabled Link</NavLink>
          </NavItem>
          <Nav className="ml-auto" navbar>
               <NavItem>
                 <span>Hello,  </span>
                 <span>Rich</span>
                 <span>  Logout</span>
               </NavItem>
          </Nav>
        </Nav>
      </div>
    );
  }
}
