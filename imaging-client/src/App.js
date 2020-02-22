import React from 'react';
import axios from 'axios';
import Menu from './Menu.js';
import Display from './Display.js';

class App extends React.Component {
  state = {
    students: []
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    axios.get('http://localhost:3000/students')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => console.log(error));
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
