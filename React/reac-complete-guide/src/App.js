import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component 
{
  state = 
  {
    persons:
     [
      {name: 'Mehaga', age: 228},
      {name: 'Muradif', age: 329},
      {name: 'Munir', age: 478}
     ]
  }

  switchNameHandler = () =>
  {
    // console.log('I was clicked!');
    // this.setState.persons[0].name = "MEHO";
    this.setState(
    {
      persons:
      [
        {name: 'Meho hoMe', age: 2},
        {name: 'Meho OG', age: 3},
        {name: 'Meho Baby', age: 4}
      ]
    })
  }

  render() 
  {
    return (
      <div className="App">
        <h1>Hi, there I'm React.</h1>
        <p>This is working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name}/>
        <Person age={this.state.persons[1].age} name={this.state.persons[1].name}/>
        <Person age={this.state.persons[2].age} name={this.state.persons[2].name}>My Hobbies: Trolling</Person>
      </div>
    );
  }
}

export default App;
