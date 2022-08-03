import React, {useState, useMemo} from "react";
import "./style/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: "descriptions"},
    {id: 2, title: 'JS', body: "escriptions"}
  ])

const [filter,setFilter] = useState({sort:'', query: ''})

  const sortedPosts =  useMemo(() => {
    if (filter.sort) { 
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort].localeCompare))
    }
    return posts
  },[filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  },[filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style={{ border: '0.5px solid cornflowerblue'}} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {
      sortedAndSearchPosts.length !==0
      ? 
        <PostList remove = {removePost} posts={sortedAndSearchPosts} title="list posts 1" />
      :
        <h1 style={{textAlign: 'center'}}>
          NO posts 
        </h1>
      }
    </div>
  ); 
}

export default App;
