import React from 'react'
import { useState } from 'react'

function Login(props) {
    const [isLoggedIn , setisLoggedIn] = useState(false)

    function handleIn(){

        setisLoggedIn(true)
    }
    function handleOut(){
        setisLoggedIn(false)
    }


  return (
    <div>

<div className="main">
             {
        isLoggedIn ?
        (
            <>
            <button onClick={handleOut} className='but'>Log Out</button>


             {

    <div className='helo'   >
        {
            props.posts.map((p)=>(
                <div className='mp'>
                    <h1>Medicine: {p.name}</h1>
                    <h2>Quantity: {p.quantity}</h2>
                   <h3>Price: {p.price}</h3>
                   <h4>Expery:{p.expiry}</h4>
                </div>
            ))
        }
    </div>


    }


            </>
        ):
        (
            <>
             <div className="text">
             <h1> Contact Us </h1>
     </div>
         <div className="username">
             <input type="username" name="" placeholder="Name" required/><br/><br/>
             <input type="email" name="" placeholder="Email" required/><br/><br/>
             <input type="text" name="" placeholder="Company" required/><br/><br/>
             <input type="text2" name="" placeholder="Phone" required/><br/><br/>
             <input type="text3" name="" placeholder="Massage" required/><br/><br/>
             </div> 

                <button onClick={handleIn} className='but'>Log In</button>
                <center><h3 className='text'>Please LogIn</h3></center>
            </>
        )
    }


</div>

    </div>
  )
}


export default Login