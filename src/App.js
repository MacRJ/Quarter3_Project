import React, {Component} from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import Routes from './routes';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllEmails} from './actions/getEmails'



class App extends Component {

componentDidMount() {
  this.props.getEmails()
}


render() {
  const cookies = new Cookies();
  cookies.set('myCat', 'PacMan', {path: '/'});

  // {cookies.get('myCat') === 'PacMan' ? <Header /> : null}


    return (
      <div>
        <Routes />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEmails: bindActionCreators(getAllEmails, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
