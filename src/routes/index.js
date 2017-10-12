import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cookies from 'universal-cookie'

import Email from '../Components/email';
import Notes from '../Components/notes';
import NavBar from '../Components/navbar';
import Login from '../Components/account/login';
import Selected from '../Components/pullDown/selected'

const cookies = new Cookies();

if (cookies.get('user_name')) {
  var switches = <Switch>
    <Route path="/" exact component={Email}/>
    <Route path="/g/email" exact component={Email}/>
    <Route path="/g/notes" exact component={Notes}/>
    <Route path="/g/selected" exact component={Selected} />
  </Switch>
} else {
  var switches = <Login />
}

export default() => (
  <BrowserRouter>
    <div>
    {cookies.get('user_name') ? <NavBar /> : null}
     {switches}
    </div>
  </BrowserRouter>
)
