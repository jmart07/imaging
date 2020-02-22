import React from 'react';
import axios from 'axios';
import Menu from './Menu.js';
import Display from './Display.js';

class App extends React.Component {

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    axios.get('http://localhost:3000/students')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Menu />
        <Display />
      </div>
    );
  }
}

export default App;
