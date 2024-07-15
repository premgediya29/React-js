import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import NewsList from './components/NewsList';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [category, setCategory] = useState('')
  const pageSize = 1
  return (

   

    <div className="App">
      <Router>
      <Navbar setCategory={setCategory} category={category}/>
      <SearchBar />
       {/* <NewsList pageSize={pageSize} category={category} /> */}
        <Routes>
          <Route exact path='/' element={ <NewsList pageSize={pageSize} key='general' category='general' />} />
          <Route exact path='/business' element={ <NewsList pageSize={pageSize} key='business' category='business' />} />
          <Route exact path='/technology' element={ <NewsList pageSize={pageSize} key='technology' category='technology' />} />
          <Route exact path='/entertainment' element={ <NewsList pageSize={pageSize} key='entertainment' category='entertainment' />} />
          <Route exact path='/sports' element={ <NewsList pageSize={pageSize} key='sports' category='sports' />} />
          <Route exact path='/science' element={ <NewsList pageSize={pageSize} key='science' category='science' />} />
          <Route exact path='/health' element={ <NewsList pageSize={pageSize} key='health' category='health' />} />
          

        </Routes>

      </Router>
      
      {/* <SearchBar /> */}
      <NewsList category={category} />
    </div>
  );
}

export default App;
 