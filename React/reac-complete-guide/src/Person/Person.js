import React from 'react';
import '../Person/Person.css';

const Person = (props) =>
{
  return(
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} person and I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default Person;