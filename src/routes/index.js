import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie'

import Email from '../Components/email';
import Notes from '../Components/notes';
import NavBar from '../Components/navbar';
import Login from '../Components/account/login'

const cookies = new Cookies();

if (cookies.get('myCat') === 'PacMan') {
  var switches = <Switch>
    <Route path="/" exact component={Email}/>
    <Route path="/g/email" exact component={Email}/>
    <Route path="/g/notes" exact component={Notes}/>
  </Switch>
} else {
  var switches = <Login />
}

export default() => (
  <BrowserRouter>
    <div>
      <NavBar/> {switches}
    </div>
  </BrowserRouter>
)
