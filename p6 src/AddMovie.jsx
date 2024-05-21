import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AddMovie({ addnewPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [actor,setactor] =useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        addnewPost(title, content,actor)
        navigate('/')
    }

    return (
        <center>
            <div className="container">
                <h1>ADD About Movie</h1>
                <form onSubmit={handleSubmit}>
                    <h3>Movie name</h3>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> 
                    <h3>Add Actors Name</h3>
                    <input type="text" value={actor} onChange={(e) => setactor(e.target.value)} />

                    <h3>Movie script</h3>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea> 
                    <button type='submit'>ADD Movie</button>
                </form>

                <Link to="/">Back TO Home Page</Link>
            </div>
        </center>
    )
}

export default AddMovie;