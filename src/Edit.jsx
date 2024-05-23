import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';



function Edit({ posts, updatePost }) {
  const { id } = useParams();
  let ans = posts.find(post => post.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [content, setContent] = useState(ans.content);
  const[image,setimage]=useState(ans.image)
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updatePost(ans.id, title, content,image);
    navigate('/');
  }

  function handlechange(e){
    setimage(e.target.files[0])
}

  return (
    <center>
    <div className="add-post-container">
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <h1>Name:</h1>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br /><br /><br />
        <h1>Product:</h1>
        <input value={content} onChange={(e) => setContent(e.target.value)}/>
        <br /><br /><br />
        <h1>Photo:</h1>
        <input type="file" onChange={handlechange} id='file' /><br/><br/><br/>
        <button type='submit'>UPDATE MENU</button>
        <br /><br /><br />
      </form>
      <Link to="/" id='link'>Back To Product Page</Link>
    </div>
    </center>
  );
}

export default Edit