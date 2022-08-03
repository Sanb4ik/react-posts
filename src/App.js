import React, {useState, useMemo} from "react";
import "./style/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: "descriptions"},
    {id: 2, title: 'JS', body: "escriptions"}
  ])
  const [selectedSort, setSlectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts =  useMemo(() => {
    if (selectedSort) { 
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  },[selectedSort, setSlectedSort])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  },[searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort)=>{
    console.log(sort)
    setSlectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style={{ border: '0.5px solid cornflowerblue'}} />
      <div>
        <MyInput
          style={{ border: '0.5px solidCornflowerblue'}}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
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
