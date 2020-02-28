import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../api/fetchStudents';
import fetchTemplates from '../api/fetchTemplates';
import Checklist from './Checklist';
import Canvas from './Canvas';
import Filter from './Filter';
import './app.css';

const Main = ({getStudents, getTemplates}) => {

  // on load gets students, templates, and shapes
  useEffect(() => {
    const awaitStudents = async () => {
      const dbStudents = await fetchStudents();
      getStudents(dbStudents);
    }
    // templates fetched with associated shapes
    const awaitTemplates = async () => {
      const dbTemplates = await fetchTemplates();
      console.log('dbtemplates', dbTemplates)
      getTemplates(dbTemplates);
    }

    awaitStudents();
    awaitTemplates();
  }, []);

  return (
      <div className='container'>
        <div className='left'>
          <div className='logo'>LOGO</div>
          <Checklist />
        </div>
        <div className='right'>
          <Filter />
          {/* <Canvas /> */}
        </div>
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: (students) => dispatch({type: 'UPDATE_STUDENTS', newStudents: students}),
    getTemplates: (templates) => dispatch({type: 'UPDATE_TEMPLATES', newTemplates: templates}),
  }
}

export default connect(null,mapDispatchToProps)(Main);
