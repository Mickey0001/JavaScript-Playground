//Import React and React DOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create an component
const App = () => 
{
  const buttonText = {text: "click"};
  const style = {backgroundColor: ' blue', color: 'white'};
  const labelText = "Enter your name";

  return (
    <div>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input id="name" type="text"/>
        <button style={style}>
          {buttonText.text}
        </button>
    </div>
);
}

//Render the component
ReactDOM.render(<App/>, document.querySelector('#root'));