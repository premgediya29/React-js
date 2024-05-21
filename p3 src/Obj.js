import React from 'react'

function Obj(props) {
  return (
    <>
    {

    <div    >
        {
            props.posts.map((p)=>(
                <div className='mp'>
                    <h1>{p.name}</h1>
                    <h2>{p.quantity}</h2>
                   <h3>{p.price}</h3>

                </div>
            ))
        }
    </div>


    }
    </>

  )
}

export default Obj