import React from "react";
import "./style/App.css";
import PostItem from "./components/PostItem";
import {useState, useRef} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [posts, setPosts] =useState([
    {id: 1, title: 'C#', body: "descriptions"},
    {id: 2, title: 'JS', body: "descriptions"}
  ])
  const [title, setTitle]=useState('')
  const [body, setBody]=useState('')


  const addNewPost = (e) =>{
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    console.log(newPost);
    setPosts([...posts,newPost])
  }

  return (
    <div className="App">
      <form>
        {/* controlled */}
        <MyInput  
          value={title}
          onChange={e => setTitle(e.target.value)}
          type = "text"
          placeholder="title"
        />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type = "text"
          placeholder="description"
        />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostList posts={posts} title="list posts 1" />
    </div>
  ); 
}

export default App;
