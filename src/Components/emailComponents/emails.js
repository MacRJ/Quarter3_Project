import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Email from './email';
import { Container, Row, Col } from 'reactstrap';
import {clicked} from '../../actions/getEmails'



class Emails extends Component {

  render () {
console.log('Emails', this.props)

    let emailsVar = this.props.emails.map((email, i) => {
      return <Email key={i} email={email} clicked={this.props.clicked}/>
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

function mapStateToProps(state, props){
  return {
    emails: state.emails
  }
}

function mapDispatchToProps(dispatch) {
  return{
    clicked: bindActionCreators(clicked, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
