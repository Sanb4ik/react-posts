
import Posts from './pages/Posts';
import About from './pages/About';

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
    </Routes>
    </>
  );
};

 export default App;