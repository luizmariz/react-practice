import React, { Component } from 'react';
import { func, array } from 'prop-types';

class CreateNewUser extends Component {
	state = {
    	user: {
        	username: '',
          	firstname: '',
          	lastname: '',
          	games: 0
        },
      	exists: false
    }
	
	handleChange = event => {
      	const { name, value } = event.target
        
    	this.setState( prev => ({
        	...prev,
          	user: {
            	...prev.user,
              	[name]: value
            }
        }));
    }

	handleSubmit = event => {
    	event.preventDefault();
      	const userAlreadyExist = this.userExists(this.state.user.username);
         
        if(!userAlreadyExist){
        	this.props.onAddUser(this.state.user);
        }
   
      	this.setState( prev => ({ 
              ...prev,
              	exists: userAlreadyExist
        }));
    }
	
	isDisabled = () => {
      	const { username, firstname, lastname } = this.state.user
    	return (username === '' || firstname === '' || lastname === '');
    }

	userExists = ( username ) => {
        for(let user of this.props.users) {
        	if(user.username === username) {
            	return true;
            }
        }
        
      	return false
    }

	render() {
      	const { user, exists } = this.state

    	return(
      		<div>
             <form onSubmit = {this.handleSubmit}>
             	<input 
             		type='text'
          			placeholder='Username'
             		name='username'
             		value={user.username}
					onChange={this.handleChange}
				/>
				<input 
             		type='text'
          			placeholder='First Name'
             		name='firstname'
             		value={user.firstname}
					onChange={this.handleChange}
				/>
				<input 
             		type='text'
          			placeholder='Last Name'
             		name='lastname'
             		value={user.lastname}
					onChange={this.handleChange}
				/>
				<button disabled={this.isDisabled()}> ADD </button>
            </form>
			{ exists && 
            	<p> Username already exists, try a new one </p>
            }
            </div>
      	);
    }
}

CreateNewUser.propTypes = {
  onAddUser: func.isRequired,
  users: array.isRequired
}

export default CreateNewUser;