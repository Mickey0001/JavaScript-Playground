import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './App.css';

const App = () =>
{
  return (
    <div className="ui container comments">
       <ApprovalCard>
          <CommentDetail 
            avatar={faker.image.avatar()} 
            time="Today at: 4:50 PM" 
            text="There is no Burek with cheese!"  
            author="Munir"
          />
      </ApprovalCard>

        <ApprovalCard>
          <CommentDetail 
            avatar={faker.image.avatar()} 
            time="Today at: 2:33 PM" 
            text="Foča is better then Sarajevo..." 
            author="Haso"
          />
       </ApprovalCard>

       <ApprovalCard>
          <CommentDetail 
            avatar={faker.image.avatar()} 
            time="Today at: 1:26 PM" 
            text="El-Bake is the king of Kekistan." 
            author="Ekrem"
          />
       </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));