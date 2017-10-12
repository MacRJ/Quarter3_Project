import React, { Component } from 'react';
import {connect} from 'react-redux';
import Email from '../emailComponents/email';
import {Container, Row, Col} from 'reactstrap';
import {bindActionCreators} from 'redux';
import {clicked, selected} from '../../actions/getEmails'


class Selected extends Component {


render() {
  console.log('SelectedHEard')

  let emailsVar = this.props.selectedEmail.map((email, i) => {
    return <Email key={i} email={email} clicked={this.props.clicked} selected={this.props.selected}/>
  })


  return (
    <Container>
      <Row>
        <Col md="10">
          {emailsVar}
        </Col>
      </Row>
    </Container>
  )
}
}

function mapStateToProps(state, props) {
  console.log("heardSelected", state)
  return {
    selectedEmail: state.emails.filter(email => {
      return email.selected === true
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clicked: bindActionCreators(clicked, dispatch),
    selected: bindActionCreators(selected, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Selected);
