import React, {useState, useEffect} from "react";
import "./style/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyForm from "./components/UI/form/MyForm";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
const axios = require("axios");
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: "descriptions"},
    {id: 2, title: 'JS', body: "escriptions"}
  ])

  const [filter,setFilter] = useState({sort:'', query: ''})
  const [modal,setModal] = useState(false)
  const  sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() =>{
    fethPosts();
  },[filter])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fethPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    
    setPosts(response.data)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fethPosts}>get</button>
     <MyButton 
        style={{marginTop: '20px'}}
        onClick={() => setModal(true)}
      >
        Create Post
      </MyButton>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MyForm visible={modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </MyForm>
      {/* <hr style={{ border: '0.5px solid cornflowerblue'}} /> */}
      
      <PostList remove = {removePost} posts={sortedAndSearchPosts} title="list posts 1" />
    </div>
  ); 
}

export default App;
