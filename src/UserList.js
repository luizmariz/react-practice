import React, { Component } from 'react';
import { array } from 'prop-types';
import { User } from './User.js';

class UserList extends Component {
  state = {
  	hideScore: false,
  }
  
  changeScore = () => {
  	this.setState( prev => ({ hideScore: !prev.hideScore }));
  }

  render() {
    	const users = this.props
    	const hideScore = this.state
    	
    	return(
        	<div>
          		<h1> Users: </h1>
    			{ users.length === 0 &&
    				<button onClick={this.changeScore}> {  hideScore ? "Hide" : "Show"}</button> 
				}
				<ol>
          			{ users.map( user => (
                 		<User user={user} onHandleScore={hideScore}/>
                 	))}
				</ol>
          	</div>
        );
    }

}

UserList.propTypes = { users: array.isRequired, };

export default UserList;