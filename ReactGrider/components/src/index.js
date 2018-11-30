import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>
{
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src="" alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Mirza
          </a>
          <div className="metadata">
            <span className="date">Today at 18:00</span>
          </div>
          <div className="text">
            Very nice post.
          </div>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));