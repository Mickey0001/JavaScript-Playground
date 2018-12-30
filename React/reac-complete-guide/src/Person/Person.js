import React from 'react';

const Person = (props) =>
{
  return(
    <div>
      <p>I'm {props.name} person and {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Person;