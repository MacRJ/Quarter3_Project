import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form inline action="http://localhost:5000/" method="POST">
        <FormGroup>
          <Label for="exampleEmail" hidden>username</Label>
          <Input type="text" name="username" id="exampleEmail" placeholder="User Name" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    );
  }
}
