import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllReplys, deleteReply} from '../actions/reply'
import {Table, Container, Row, Col, Button, Form, Input, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import {clicked} from '../actions/getEmails'



class Notes extends Component {

  componentDidMount() {
    this.props.getAllReplys()
  }

  render () {
console.log('replyComponent', this.props)


let theTable = this.props.replys.map((reply, i) => {
  return <tr key={i}>
    <th scope="row"></th>
     <Form action="http://localhost:5000/reply/update" method="POST">
       <FormGroup>
          <td>
            <Input type="textarea" name="text" placeholder={reply.replymessage} />
            <Input type="hidden" name= "id" value={reply.replyid} />
            <Button >Submit</Button>
          </td>
       </FormGroup>
     </Form>
      <td>{reply.subject}</td>
      <td>{reply.email}</td>
      <td><Link to="/g/email">
          <Button onClick={
              e => {
              this.props.clicked(reply.email_id)}
              }>Take Me to Email</Button></Link></td>
      <td>
          <Button onClick={e => this.props.deleteReply(reply.replyid)}> Delete Reply</Button></td>


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
                <th>The Reply</th>
                <th>Subject</th>
                <th>Eamil</th>
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
    replys: state.replys
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllReplys: bindActionCreators(getAllReplys, dispatch),
    deleteReply: bindActionCreators(deleteReply, dispatch),
    clicked: bindActionCreators(clicked, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
