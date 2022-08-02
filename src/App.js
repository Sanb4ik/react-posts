import React from "react";
import "./style/App.css";
import PostItem from "./components/PostItem";
import {useState} from "react";
import PostList from "./components/PostList";
function App() {

  const [posts, setPosts] =useState([
    {id: 1, title: 'C#', body: "descriptions"},
    {id: 1, title: 'C#', body: "descriptions"}
  ])
  return (
    <div className="App">
      <PostList posts={posts} title="list posts 1" />
    </div>
  ); 
}

export default App;
