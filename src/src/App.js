// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 id='h1'>Student Portal</h1>
        <AddStudentForm />
        <StudentList />
      </div>
    </Provider>
  );
};

export default App;
