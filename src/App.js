import React, {useState, useEffect} from "react";
import "./style/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyForm from "./components/UI/form/MyForm";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";
import { useLoading } from "./hooks/useLoading";
import getPageCount from "./utils/pages"
import { usePagination } from "./hooks/usePagination";

function App() {

  const [posts, setPosts] = useState([])
  const [filter,setFilter] = useState({sort:'', query: ''})
  const [modal,setModal] = useState(false)
  const [totalPages,setTotalPages] = useState(10)
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)
  const  sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  console.log(totalPages)
  const [fethPosts, isPostsLoading, postError] =useLoading(async()=>{
    const response = await PostService.getAll(limit,page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    //console.log(totalCount)
    setTotalPages(getPageCount(totalCount, limit))
    console.log(totalPages)
  })
  const pages = usePagination(totalPages)
  console.log(pages)
  
  useEffect(() =>{
    fethPosts();
  },[filter])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <button onClick={fethPosts}>get</button> */}
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
      {
        postError && 
        <h1>Error {postError.message}</h1>
      }
      {
        isPostsLoading
        ?<MyLoader />
        :<PostList remove = {removePost} posts={sortedAndSearchPosts} title="list posts" />
      }
      {pages.map(p =><MyButton style = {{marginRight: '5px', width: '30px'}}> {p} </MyButton>)}
    </div>
  ); 
}

export default App;
