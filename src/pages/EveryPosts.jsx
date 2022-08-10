import React, {useState, useEffect} from "react";
 import cl from "../style/App.module.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyForm from "../components/UI/form/MyForm";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePost";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import { useLoading } from "../hooks/useLoading";
import getPageCount from "../utils/pages"
import MyPagiation from "../components/UI/pagination/MyPagiation";
import { useContext } from "react";
import {SearchAndSortContext} from "../context"

function Posts() {
  const {filter, setFilter, modal, setModal} = useContext(SearchAndSortContext);
  console.log(filter);
  const [posts, setPosts] = useState([])
  // const [filter,setFilter] = useState({sort:'', query: ''})

  const [totalPages,setTotalPages] = useState(10)
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)
  const  sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)

  const [fethPosts, isPostsLoading, postError] = useLoading(async()=>{
    const response = await PostService.getAll(limit,page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const changePage = ((p)=>{
    setPage(p)
  })

  useEffect(() =>{
    fethPosts();
  },[filter, page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div>
      {/* <PostFilter
        filter={filter}
        setFilter={setFilter}
      /> */}
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
      <MyPagiation totalPages={totalPages} changePage = {changePage}/>
    </div>
  ); 
}

export default Posts;
