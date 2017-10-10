import React, { Component } from 'react';
import Cookies from 'universal-cookie'

import Emails from './emailComponents/emails'



class Email extends Component {

  render () {

    return (
      <div>
        <Emails />
      </div>
    )
  }
}
export default Email;
