import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import AddMovie from './AddMovie';
import { useState } from 'react';
import EditMovie from './EditMovie';

function App() {

  const [posts, setPosts] = useState([])

  function addnewPost(title,content,actor){
    let newPost = {
      id : new Date().getTime(),
      title : title,
      content : content,
      actor : actor
    }
    setPosts([...posts, newPost])

  }

  function deletPost(id){
    setPosts(posts.filter((el)=>(
    el.id !== id
    )))
        }

        function updatemovie(id,title,content,actor) {
          setPosts(posts.map(post => post.id === id ? {...post,title:title,content:content,actor:actor} : post));
        }

  return (
    <Router>
      <div className="App">
     <Routes>
      <Route path = "/" element = {<Home posts={posts} deletPost={deletPost} />} ></Route>

      <Route path = "/add" element = {<AddMovie addnewPost = {addnewPost}/>}></Route>

      <Route path='/edit/:id' element={<EditMovie updatemovie={updatemovie} posts={posts}/>} ></Route>
     </Routes>
     </div>
    </Router>
  );
}

export default App;