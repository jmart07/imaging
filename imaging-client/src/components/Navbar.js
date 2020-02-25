import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Test</NavLink>
    </nav>
   );
}
 
export default Navbar;