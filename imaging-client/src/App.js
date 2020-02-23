import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu.js';
import Display from './Display.js';
import Filter from './Filter.js';

import './app.css';


const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/students')
      .then((response) => {
        setStudents(response);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className='container'>
      <div className='left'>
        <div className='logo'>LOGO</div>
        <Menu />
      </div>
      <div className='right'>
        <Filter />
        <Display />
      </div>
    </div>
  );
}

export default App;
