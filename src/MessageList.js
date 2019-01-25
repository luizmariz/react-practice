import React from 'react';
import { array, object } from 'prop-types';

const MessageList = props => {
  const { messages, user } = props;
  return (
    	<ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
    );
}

MessageList.propTypes = {
	messages: array.isRequired,
	user: object.isRequired,
}

export default MessageList;