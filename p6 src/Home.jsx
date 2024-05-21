import React from 'react';
import { Link } from 'react-router-dom';


function Home({ posts , deletPost }) { 
function handleDelet(id){
  deletPost(id)
}
  return (
    <div className="main">
      <div className='box'>
        <center>
      <h1 style={{ maxWidth: '600px', margin: '0 auto'}}>Welcome To Movie Creating app</h1>
      <br />  <br />  <br />  <br />
      {
        posts.map((el) => (
          <div key={el.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}> 
            <h2>Movie name :{el.title}</h2>
            <h3>Actors : {el.actor}</h3>
            <p>Script :{el.content}</p>
            <button onClick={()=>handleDelet(el.id)}>Delete</button>

            <Link to={`/edit/${el.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))
      }
        <br />  <br />  <br />
      <Link to="/add" style={{ display: 'block', marginTop: '20px', textDecoration: 'underline orange', fontSize: '20px' }}>ADD About Movie</Link>
      </center>
    </div>
    </div>
  );
}

export default Home;