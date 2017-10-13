import React from 'react';
import {ButtonGroup, Button, Col, Container, Row, FormGroup, Label, Input} from 'reactstrap';
import NoteCard from './noteCard'

const Email = (props) => {

  let {
    id,
    from,
    subject,
    email,
    note_attached,
    clicked,
    selected,
    user_id
  } = props.email
console.log("Eamil", props)

  return (
    <Container>
      <Row>
        <Col xs="3">
          <ButtonGroup>
            <Input
              type="checkbox"
              name="selected"
              onChange={e => props.selected(id)}
              checked={selected ? "checked" : null} />
            <Button onClick={e => props.clicked(id)}>Add Note</Button>
            <Button>Reply</Button>{' '}
          </ButtonGroup>
        </Col>
        <Col xs="3">
          {from}
        </Col>
        <Col xs="3" >
          <div className="bold">
            {subject}
          </div>
        </Col>
      </Row>
      {clicked ? <NoteCard
        emailID={id}
        userID={user_id}
        addTime={props.addTime(id)}/>: null}
    </Container>
  )
}
export default Email
