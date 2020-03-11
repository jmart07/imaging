import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import fetchStudents from '../api/fetchStudents';
import fetchTemplates from '../api/fetchTemplates';
import Main from './Main';
import './app.css';

const App = ({templates, students, storeStudents, storeTemplates}) => {
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

    awaitStudents();
    awaitTemplates();
  }, []);

  return (
    // only render if templates and students have been populated
    <BrowserRouter>
      {templates && students &&
      <>
        <Navbar />
        <Route exact path='/' component={Main} />
      </>
      }
    </BrowserRouter>
   );
}

const mapStateToProps = (state) => {
  return{
    students: state.students,
    templates: state.templates
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return {
    storeStudents: (students) => dispatch({type: 'STORE_STUDENTS', newStudents: students}),
    storeTemplates: (templates) => dispatch({type: 'STORE_TEMPLATES', newTemplates: templates}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
