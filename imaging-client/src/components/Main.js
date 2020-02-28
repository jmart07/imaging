import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../api/fetchStudents';
import Checklist from './Checklist';
import Canvas from './Canvas';
import Filter from './Filter';
import './app.css';

const Main = ({getStudents}) => {

  useEffect(() => {
    console.log('fetch',fetchStudents());
    // console.log("temp", temp)
    // getStudents(temp);
  }, []);

  return (
      <div className='container'>
        <div className='left'>
          <div className='logo'>LOGO</div>
          <Checklist />
        </div>
        <div className='right'>
          <Filter />
          <Canvas />
        </div>
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: (students) => dispatch({type: 'GET_STUDENTS', newStudents: students})
  }
}

export default connect(null,mapDispatchToProps)(Main);
