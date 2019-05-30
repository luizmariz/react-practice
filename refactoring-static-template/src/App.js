import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
 	messages: [],
  }
  
  handleAddMessage = ( username, text ) => {
  	this.setState( prev => ({ 
      messages: [ ...prev.messages, { ['username']: username, ['text']: text } ]}));
  }


  render() {
    const { messages } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
			{users.map( user => (
         		<ChatWindow key={user.username} user={user} messages={messages} onMessage={this.handleAddMessage}/>
         	))}
        </div>
	  </div>
    );
  }
}

export default App;
