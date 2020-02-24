import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { studentReducer } from './studentReducer';

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [students, dispatch] = useReducer(studentReducer, []);

  useEffect(() => {
    
    
  })
  return(
    <StudentContext.Provider>
      {props.children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider;