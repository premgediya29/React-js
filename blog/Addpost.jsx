import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 

function Addpost({ addnewPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image , setimage] =useState(null)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        addnewPost(title, content,image)
        navigate('/')
    }
function handlechange(e){
    setimage(e.target.files[0])
}
    return (
        <center>
            <div className="container">
                <h1>ADD POST</h1>
                <form onSubmit={handleSubmit}>
                    <h3>Title:</h3>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type='text'/> <br/><br/><br/>

                    <h3>Content:</h3>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} type='text' ></textarea> <br/><br/><br/>
                    <input type="file" onChange={handlechange} />
                    <button type='submit'>ADD POST</button><br/><br/><br/>
                </form>

                <Link to="/">Back TO Home Page</Link>
            </div>
        </center>
    )
}

export default Addpost;
