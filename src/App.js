// import "./style/root.css";
import { useState } from "react";
import cl from "./style/App.module.css";
import Posts from './pages/EveryPosts';
import Post from './pages/OnePost'
import About from './pages/About';
import NotFound from './pages/NotFound';
import ReactDOM from "react-dom/client";
import Navbar_ from './components/UI/navbar/Navbar';
import {SearchAndSortContext} from './context'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [filter,setFilter] = useState({sort:'', query: ''})

  return (
    <SearchAndSortContext.Provider
    value = {{filter, setFilter}}>
      <div>
        <Navbar_ />
        <div className={cl.AppContainer}>
          <div className={cl.App}>
            <Routes>
              <Route path="/posts" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route exact path="*" element={<NotFound />} />
              <Route exact path={"/post/:id"} element={<Post />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchAndSortContext.Provider>
  );
};

 export default App;