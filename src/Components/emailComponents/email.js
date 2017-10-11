import React from 'react';
import {ButtonGroup, Button, Col, Container, Row} from 'reactstrap';
import NoteCard from './noteCard'


const Eamil = (props) => {

let {id, from, subject, email, note_attached, clicked, selected} = props.email
console.log('note_attached', note_attached)



  return (
    <Container>
      <Row>
        <Col xs="3">
          <ButtonGroup onClick={e => props.clicked(id)}>
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
    {clicked ? <NoteCard id={id}/> : null}
    </Container>
  )
}
export default Eamil
