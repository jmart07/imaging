import React, { createContext, useReducer, useEffect } from 'react';
import { studentReducer } from './studentReducer';

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [students, dispatch] = useReducer(studentReducer, []);

  return(
    <StudentContext.Provider>
      {props.children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider;