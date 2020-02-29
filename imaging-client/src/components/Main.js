import React from 'react';
import Checklist from './Checklist';
import Canvas from './Canvas';
import Filter from './Filter';

const Main = () => {

  return (
    <div className='container'>
      <div className='left'>
        <div className='logo'>LOGO</div>
        <Checklist />
      </div>
      <div className='right'>
        {/* <Filter /> */}
        <Canvas />
      </div>
    </div>
  );
}

export default Main;