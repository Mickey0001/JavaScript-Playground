import React from 'react';

const CommentDetail = () =>
{
  return (
    <div className="comment">
    <a href="/" className="avatar">
      <img src={faker.image.avatar()} alt="avatar"/>
    </a>
    <div className="content">
      <a href="/" className="author">
        {faker.name.firstName()}
      </a>
      <div className="metadata">
        <span className="date">Today at 18:00</span>
      </div>
      <div className="text">
        Very nice post.
      </div>
    </div>
  </div>
  );
}

