import React from 'react';
import {ButtonGroup, Button, Col, Container, Row} from 'reactstrap'


const Eamil = (props) => {
console.log('Email', props.email)

let {id, from, subject, email, note_attached} = props.email
console.log('note_attached', note_attached)
  return (
    <Container>
      <Row>
        <Col xs="3">
          <ButtonGroup>
            {note_attached ? <Button>Note Attached</Button> : null}
            <Button>Reply</Button>{' '}
          </ButtonGroup>
        </Col>
    <Col xs="3">
      {from}
    </Col>
      <Col xs="3">
        {subject}
      </Col>
    </Row>
    </Container>
  )
}
export default Eamil
