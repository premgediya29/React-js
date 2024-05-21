import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


function EditMovie({ posts, updatemovie }) {
  const { id } = useParams();
  let ans = posts.find(post => post.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [content, setContent] = useState(ans.content);
  const [actor,setactor] =useState(ans.actor)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updatemovie(ans.id, title, content,actor);
    navigate('/');
  }

  return (
    <div className="container">
      <h1>Edit About Movie</h1>
      <form onSubmit={handleSubmit}>
        <h3>Edit Movie Name</h3>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />

        <h3>Edit Actors Name</h3>
                    <input type="text" value={actor} onChange={(e) => setactor(e.target.value)} />
        <h3>Edit Script</h3>
        <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>

        <button type='submit'>UPDATE POST</button>

      </form>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
}

export default EditMovie;