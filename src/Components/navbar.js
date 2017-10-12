import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink} from 'reactstrap';


import Cookies from 'universal-cookie'


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

const cookies = new Cookies();
let username = cookies.get('user_name');


console.log('username',username)

    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="http://localhost:3000/" active>Email </NavLink>
          </NavItem>
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Email Actions
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Email Functions</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="http://localhost:3000/g/selected">Selected</DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink href="http://localhost:3000/g/notes">Notes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled >Disabled Link</NavLink>
          </NavItem>
          <Nav className="ml-auto" navbar>
               <NavItem>
                 <span>Hello,  </span>
                 <span>{username}</span>
                 <span><a href="http://localhost:5000/logout">   Logout</a></span>
               </NavItem>
          </Nav>
        </Nav>
      </div>
    );
  }
}
