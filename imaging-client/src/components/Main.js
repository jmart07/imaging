import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../api/fetchStudents';
import fetchTemplates from '../api/fetchTemplates';
import Checklist from './Checklist';
import Canvas from './Canvas';
import Filter from './Filter';
import './app.css';

const Main = ({loading, toggleLoad, storeStudents, storeTemplates}) => {

  // on load gets students, templates, and shapes
  useEffect(() => {
    
    const awaitStudents = async () => {
      const apiStudents = await fetchStudents();
      storeStudents(apiStudents);
    }
    // templates fetched with associated shapes
    const awaitTemplates = async () => {
      const apiTemplates = await fetchTemplates();
      storeTemplates(apiTemplates);
    }

    toggleLoad();
    awaitStudents();
    toggleLoad();
    awaitTemplates();
  }, []);

  return (
    <div className='container'>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <div className='left'>
            <div className='logo'>LOGO</div>
            <Checklist />
          </div>
          <div className='right'>
            <Filter />
            <Canvas />
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('filter', state)
  return{
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLoad: () => dispatch({type: 'TOGGLE_LOAD'}),
    storeStudents: (students) => dispatch({type: 'STORE_STUDENTS', newStudents: students}),
    storeTemplates: (templates) => dispatch({type: 'STORE_TEMPLATES', newTemplates: templates}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
