import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';

const App = () => {
  return ( 
    <BrowserRouter>
      <Navbar />
      <Route path='/' component={Main} />
    </BrowserRouter>
   );
}
 
export default App;