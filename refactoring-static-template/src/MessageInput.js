import React,{ Component } from 'react';
import { func } from 'prop-types';

class MessageInput extends Component {
	state = {
    	value: '',
    }

  	isDisabled = () => {
    	if( this.state.value === '') {
          return true;
        }else {
          return false;
        }
  	};
  	
	handleChange = event => {
      	const { value } = event.target
      	this.setState( () => ({
        	['value']: value
        }));
    }
	
	handleSubmit = event => {
      	event.preventDefault();
      	this.props.sendMessage( this.state.value );
      	this.setState( () => ({
        	value: ''
        }));
    }

	render(){
      return(
    	<div>
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.value} onChange={this.handleChange}/>
            <div className="input-group-append">
              <button className="btn submit-button" disabled={this.isDisabled()}>
                SEND
              </button>
            </div>
          </form>
        </div>
      );
    }
}

MessageInput.propTypes = {
	sendMessage: func.isRequired
};

export default MessageInput;