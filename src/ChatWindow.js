import React, { Component } from 'react';
import { object, array, func } from 'prop-types';
import MessageList from './MessageList.js';
import MessageInput from './MessageInput.js';

class ChatWindow extends Component {
	addMessage = text => {
    	this.props.onMessage(this.props.user.username, text);
    }
  
  	render() {
      	const { user, messages } = this.props;
  
    	return(
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessageList messages={messages} user={user}/>
			<MessageInput sendMessage={this.addMessage}/>
          </div>
        );
    }
}

ChatWindow.propTypes = {
	user: object.isRequired,
	messages: array.isRequired,
  	onMessage: func.isRequired
}

export default ChatWindow;