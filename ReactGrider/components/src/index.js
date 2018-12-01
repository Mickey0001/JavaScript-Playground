import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () =>
{
  return (
    <div className="ui container comments">
       <CommentDetail avatar={faker.image.avatar()} time="Today at: 4:50 PM" text="Okay"  author="Munir"/>
       <CommentDetail avatar={faker.image.avatar()} time="Today at: 2:33 PM" text="Cool" author="Haso"/>
       <CommentDetail avatar={faker.image.avatar()} time="Today at: 1:26 PM" text="Nice" author="Ekrem"/>
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));