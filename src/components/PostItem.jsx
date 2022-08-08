import React from 'react';
import MyButton from './UI/button/MyButton';
import { Link } from 'react-router-dom';

const PostItem = (props) =>{

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
      
      <Link to={`/post/${props.post.id}`}>
        <MyButton style={{marginRight: "10px"}}>
          Open
        </MyButton>
      </Link>
      <MyButton 
        onClick={() => props.remove(props.post)}>
        Delete
      </MyButton>
      </div>
    </div>
  );
};

export default PostItem;