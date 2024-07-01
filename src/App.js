import './App.css';
import Dispaly from './Display';
import Signup from './Signup';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>

    <Router>

      <Routes>

      <Route path='/' element={<Dispaly/>} />

      <Route path='/login' element={<Signup/>} />

      </Routes>

    </Router>

     

    </>
  );
}

export default App;