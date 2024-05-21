import React from 'react'

function Btncomp(props) {
  return (
    <div className='main-section'>
      
      {(props.status === 0)? 
        <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className='stopwatch-btn stopwatch-btn-red' onClick={props.stop}>Stop</button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.restart}>Restart</button>
        </div> : ""
      }

      {(props.status === 2)? 
        <div>
          <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.resume}>Resume</button>
          <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.restart}>Restart</button>
        </div> : ""
      }

    </div>
  )
}

export default Btncomp