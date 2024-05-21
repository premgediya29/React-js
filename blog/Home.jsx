import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home({ posts , deletPost }) { 
function handleDelet(id){
  deletPost(id)
}
const [searchitem , setsearchitem] = useState('')
const filteredpost = posts.filter((el)=>(
el.title.toLowerCase().includes(searchitem.toLocaleLowerCase())
))
  return (
    <center>
      <div>
      <h1 style={{ maxWidth: '600px', margin: '0 auto'}}>Welcome To our Page</h1>
      <input type="text" placeholder='Search post' value={searchitem} onChange={(e)=>setsearchitem(e.target.value)}/>
      {
        filteredpost.map((el) => (
          <div key={el.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}> 
            <h2>Title : {el.title}</h2>
            <p>Content:{el.content}</p>
            <img src={URL.createObjectURL(el.image)} alt="post" style={{height :'200px' , width : '200px' }} /><br/>
            <button onClick={()=>handleDelet(el.id)}>Delete</button>

            <Link to={`/edit/${el.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))
      }
      <Link to="/add" style={{ display: 'block', marginTop: '20px' }}>ADD POST</Link>
    </div>
    </center>
  );
}

export default Home;