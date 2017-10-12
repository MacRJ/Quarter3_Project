import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col, Form, Input } from 'reactstrap';

const NoteCard = (props) => {

  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Add Note to Email</CardTitle>
          <Form action="http://localhost:5000/notes/Create" method="POST">
            <CardText>
              <Input type="textarea" name="note" placeholder="Please Type A Note"/>
              <Input type="hidden" name="email_id" value={props.emailID}/>
              <Input type="hidden" name="user_id"  value={props.userID}/>
            </CardText>
            <Button type="submit">Add Note</Button>
          </Form>
        </Card>
      </Col>
      <Col sm="2">
        <Button>Schedule Reply</Button>
        <Button>Reply</Button>
      </Col>
    </Row>
  );
};

export default NoteCard
