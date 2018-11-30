import React from 'react';
import faker from 'faker';

const CommentDetail = props => 
{
return(
  <div className="comment">
  <a href="/" className="avatar">
    <img src={faker.image.avatar()} alt="avatar"/>
  </a>
  <div className="content">
    <a href="/" className="author">
      {props.author}
    </a>
    <div className="metadata">
      <span className="date">
        {faker.date.month()}
      </span>
    </div>
    <div className="text">
      {faker.lorem.sentence()}
    </div>
  </div>
</div>
);
}


export default CommentDetail;

