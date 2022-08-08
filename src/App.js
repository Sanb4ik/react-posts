
import Posts from './pages/EveryPosts';
import Post from './pages/OnePost'
import About from './pages/About';
import NotFound from './pages/NotFound';
import ReactDOM from "react-dom/client";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <>
    <header>
      <Link to='/posts'>POSTS</Link>
      <Link to='/about'>About</Link>
    </header>
    <Routes>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route exact path="*" element={<NotFound/>}/>
      <Route exact path={'/post/:id'} element={<Post/>}/>
    </Routes>
    </>
  );
};

 export default App;