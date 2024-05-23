import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product({ addnewPost }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const[image,setimage]=useState(null)
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
            <div className="add-post-container">
                <h2>ADD MENU</h2>
                <form onSubmit={handleSubmit}>
                    <h1>Name:</h1>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} /> <br/><br/><br/>

                    <h1>Product:</h1>
                    <input value={content} onChange={(e) => setContent(e.target.value)}/> <br/><br/><br/>

                    <h1>Photo :</h1>
                    <input type="file" onChange={handlechange} id='file'/><br/><br/><br/>

                    <button type='submit'>ADD Product</button><br/><br/><br/>
                </form>

                <Link to="/" id='link'>Back TO Product page</Link>
            </div>
        </center>
    )
}

export default Product