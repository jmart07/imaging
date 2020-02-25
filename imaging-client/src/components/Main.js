import React, { Component } from 'react';
import axios from 'axios';
import StudentContextProvider from '../context/StudentContext'
import Menu from './Menu';
import Display from './Display';
import Filter from './Filter';

import './app.css';

class App extends Component {
  state = {
    students: []
  }

  componentDidMount() {
    console.log('app component did mount');
    this.getStudents();
  }

  getStudents = () => {
    axios.get('http://localhost:3000/students')
    .then((response) => {
      this.setState({ students: response.data })
    })
    .catch((error) => console.log(error));
  }

  render() {
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
}

export default App;
