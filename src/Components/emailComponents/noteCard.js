import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const NoteCard = (props) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Add Note to Email</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </Col>
      <Col sm="2">
        <Button>Schedule Reply</Button>
        <Button>Add Note</Button>
        <Button>Reply</Button>
      </Col>
    </Row>
  );
};

export default NoteCard
