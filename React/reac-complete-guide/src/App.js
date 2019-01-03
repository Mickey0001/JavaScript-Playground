import React, { Component } from 'react';
import Person from './Person/Person';
import Radium from 'radium';
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
      curson: 'pointer',
      ':hover': {backgroundColor: 'lightgreen', color: 'black'}
    };

    let persons = null;

    if (this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            click={() => this.deletePersonHandler(index)}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person)}
            />
          })}
        </div> 
      );
      style.backgroundColor = 'red';
      [':hover'] = {backgroundColor: 'lightgreen', color: 'black'}
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
        <h1>Hi, there I'm React.</h1>
        <p className={classes}>This is working.</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
