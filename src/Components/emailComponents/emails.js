import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Email from './email';
import { Container, Row, Col } from 'reactstrap';



class Emails extends Component {

  render () {


    let emailsVar = this.props.emails.map((email, i) => {
      return <Email key={i} email={email}/>
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
  console.log('stateMap', state)
  return {
    emails: state.emails
  }
}



export default connect(mapStateToProps, null)(Emails);
