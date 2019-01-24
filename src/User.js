import React from 'react';
import { object, bool } from 'prop-types';

const User = props => {
  return (
  	<li key={props.user}>
    	<h3>`${props.user.username} played ${props.showGame? props.user.games : '*'} games.`</h3>
    </li>
  );
}

User.propTypes = {
	user: object.isRequired,
  	showGame: bool.isRequired
}

export default User;