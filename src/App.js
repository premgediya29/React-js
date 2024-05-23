import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Product from './Product';
import { useState } from 'react';
import Edit from './Edit';

function App() {
  const [posts, setPosts] = useState([])

  function addnewPost(title,content,image){
    let newPost = {
      id : new Date().getTime(),
      title : title,
      content : content,
      image : image
    }
    setPosts([...posts, newPost])
   
  }

  function deletPost(id){
    setPosts(posts.filter((el)=>(
    el.id !== id
    )))
        }
        
        function updatePost(id,title,content,image) {
          setPosts(posts.map(post => post.id === id ? {...post,title:title,content:content,image:image} : post));
        }

       
      
  return (
    <Router>
      <div className="App">
     <Routes>
      <Route path = "/" element = {<Home posts={posts} deletPost={deletPost} />} ></Route>

      <Route path = "/add" element = {<Product addnewPost = {addnewPost}/>}></Route>
        
      <Route path='/edit/:id' element={<Edit updatePost={updatePost} posts={posts}/>} ></Route>
     </Routes>
     </div>
    </Router>
  );
}

export default App;
