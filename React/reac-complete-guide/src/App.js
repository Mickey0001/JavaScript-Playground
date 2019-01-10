import React, { Component } from 'react';
import Person from './components/Persons/Person/Person';
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
     ],
     otherState: 'some test value',
     showPersons: false
  }

  deletePersonHandler = (personIndex) => 
  {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event) =>
  {
    this.setState(
      {
        persons:
        [
          {id: '1', name: 'newName', age: 2},
          {id: '2', name: event.target.value, age: 3},
          {id: '3', name: 'Meho Baby', age: 4}
        ]
      })
  }

  togglePersonsHandler = () =>
  {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() 
  {
    const style = 
    {
      backgroundColor: 'wheat',
      font: 'inherit',
      border: '1px solid lightblue',
      padding: '10px',
      curson: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons)
    {
      persons = (
        <div>
          <Person 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div> 
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2)
    {
      classes.push('red');
    }
    if (this.state.persons.length <= 1)
    {
      classes.push('bold')
    }


    return (
      <div className="App">
        {persons}
      </div>
    );
  }
}

export default App;
