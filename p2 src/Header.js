import React from 'react'
import { useState } from 'react'

    function Header(props)
    {
        const[count , setCount] = useState(0)
        function increment()
        {
            setCount(count + 1)
        }
        function decrement()
        {
            if(count == 0)
            {
                setCount(0)
            }
            else
            {
                setCount(count - 1)
            }
        }
        function Reset()
        {
            setCount(0)
        }
  return (
    <div className='header'>
        <div className='mobile'>
            <div className='phone-head'>
                <h5 id='h5'>1 1 : 0 0</h5>
                <div className='notch'>

                </div>
                <i class="ri-wifi-fill" id='wifi'></i>
                <i class="ri-battery-fill" id='bat'></i>
            </div>
            <div className='counter'>
                <h1 id='h1'>{count}</h1>
                <h4 id='h4'>Count Numbers</h4>
            </div>
            <div className='button'>
                <button onClick={decrement} id='btn-1'><i class="ri-arrow-left-s-line"></i></button>
                <button onClick={increment} id='btn-2'><i class="ri-arrow-right-s-line"></i></button>
                <button onClick={Reset} id='btn-3'><i class="ri-refresh-line"></i></button>
                <div className='navigation'></div>
            </div>
        </div>
    </div>
  )
}

export default Header