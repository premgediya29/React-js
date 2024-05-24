import { increment , decrement } from "./redux/Actions";
import { useSelector , useDispatch } from "react-redux";
import './App.css';

function App(){

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
      <>
      <div class="box">
        <center>
          <h1> Counter App </h1>
          <h1> Count : {count} </h1>
          <button onClick={()=>{dispatch(increment())}}> + </button>
          <button onClick={()=>{dispatch(decrement())}}> - </button>
        </center> 
      </div>
      </>
    );
}

export default App;