import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Email from './email';
import { Container, Row, Col } from 'reactstrap';
import {clicked, selected} from '../../actions/getEmails';




class Emails extends Component {


  render () {


    let emailsVar = this.props.emails.map((email, i) => {
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

function mapStateToProps(state, props){
  return {
    emails: state.emails
  }
}

function mapDispatchToProps(dispatch) {
  return{
    clicked: bindActionCreators(clicked, dispatch),
    selected: bindActionCreators(selected, dispatch),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
