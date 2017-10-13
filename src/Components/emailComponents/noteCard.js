import React from 'react'
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';

export default class NoteCard extends React.Component {
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
console.log('NoteCard', this.props)
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Add Note to Email</CardTitle>
          <Form action="http://localhost:5000/notes/Create" method="POST">
            <CardText>
              <Input type="textarea" name="note" placeholder="Please Type A Note"/>
              <Input type="hidden" name="email_id" value={this.props.emailID}/>
              <Input type="hidden" name="user_id"  value={this.props.userID}/>
            </CardText>
            <Button type="submit">Add Note</Button>
          </Form>
        </Card>
      </Col>
      <Col sm="2">
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Delay Reply
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onChange={e => {this.addTime(2)}}>2 Hours</DropdownItem>
              <DropdownItem
                onChange={e => {this.addTime(4)}}>4 Hours</DropdownItem>
              <DropdownItem
                onChange={e => {this.addTime(6)}}>6 Hours</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
      </Col>
    </Row>
  );
};
}
