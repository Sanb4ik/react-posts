import React from 'react';
import MyButton from './UI/button/MyButton';
import { Link } from 'react-router-dom';
import cl from '../style/App.module.css'
const PostItem = (props) =>{

  return (
    <div className={cl.post}>
      <div style={{width: '80%'}}>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div  style={{width: 'min-content'}}>
      
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