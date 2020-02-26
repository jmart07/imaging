import React, { Component } from 'react';
import axios from 'axios';
import Menu from './Menu';
import Canvas from './Canvas';
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
        <div className='container'>
          <div className='left'>
            <div className='logo'>LOGO</div>
            <Menu />
          </div>
          <div className='right'>
            <Filter />
            <Canvas />
          </div>
        </div>
    );
  }
}

export default App;
