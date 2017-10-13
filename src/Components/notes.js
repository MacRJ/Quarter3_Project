import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllNotes, deleteNote} from '../actions/getAllNotes';
import {Table, Container, Row, Col, Button, Form, Input, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import {clicked} from '../actions/getEmails';


class Notes extends Component {

componentDidMount() {
  this.props.getAllNotes();
}

  render () {
let {email, from, note, subject, email_id} = this.props.notes
console.log('notesComponent', this.props.notes)


let theTable = this.props.notes.map((note, i) => {
  return <tr key={i}>
    <th scope="row"></th>
     <Form action="http://localhost:5000/notes/update" method="POST">
       <FormGroup>
          <td>
            <Input type="textarea" name="text" placeholder={note.note} />
            <Input type="hidden" name= "id" value={note.notesid} />
            <Button >Submit</Button>
          </td>
       </FormGroup>
     </Form>
      <td>{note.from}</td>
      <td>{note.subject}</td>
      <td><Link to="/g/email">
          <Button onClick={
              e => {
              this.props.clicked(note.email_id)}
              }>Take Me to Email</Button></Link></td>
      <td>
          <Button onClick={e => this.props.deleteNote(note.notesid)}> Delete Note</Button></td>


  </tr>
})


    return (
    <Container>
      <Row>
        <Col xs="20">
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Note</th>
                <th>From</th>
                <th>Subject</th>
                <th>Reply</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {theTable}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    )
  }
}
function mapStateToProps(state, props){

  return {
    notes: state.notes
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getAllNotes: bindActionCreators(getAllNotes, dispatch),
    clicked: bindActionCreators(clicked, dispatch),
    deleteNote: bindActionCreators(deleteNote, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
