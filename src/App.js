import React, {useState} from "react";
import "./style/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: "descriptions"},
    {id: 2, title: 'JS', body: "escriptions"}
  ])
  const [selectedSort, setSlectedSort] = useState('')
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort)=>{
    console.log(sort)
    setSlectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style={{ border: '0.5px solid cornflowerblue', magin: '15px 0'}} />
      <div>
        <MySelect 
        defaultValue={'Sort by'}
        value={selectedSort}
        onChange= {sortPosts}
          options={[
            {value:'title', name:'by title'},
            {value:'body', name:'by description'}
          ]}
        />
      </div>
      {posts.length
      ? 
        <PostList remove = {removePost} posts={posts} title="list posts 1" />
      :
        <h1 style={{textAlign: 'center'}}>
          NO posts 
        </h1>
      }
    </div>
  ); 
}

export default App;
