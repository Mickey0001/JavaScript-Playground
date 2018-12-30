import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, there I'm React.</h1>
        <p>This is working.</p>
        <button>Switch Name</button>
        <Person age="32" name="Mirza"/>
        <Person age="190" name="Meho"/>
        <Person age="22" name="Zgembo">My Hobbies: Trolling</Person>
      </div>
    );
  }
}

export default App;
