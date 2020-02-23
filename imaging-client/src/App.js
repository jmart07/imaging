import React, { useState, useEffect } from 'react';
import StudentContextProvider from './StudentContext'
import Menu from './Menu';
import Display from './Display';
import Filter from './Filter';

import './app.css';


const App = () => {


  return (
    <StudentContextProvider>
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
    </StudentContextProvider>
  );
}

export default App;
