import React from 'react';

class Menu extends React.Component {
  render() {
    return(
      <form className='menu'>
        <div className='menuRow'>
          <label htmlFor="idNumber">ID Number</label>
          <input type="checkbox" id="idNumber" name="idNumber" ></input>
        </div>
        <div className='menuRow'>
          <label htmlFor="name">Name</label>
          <input type="checkbox" id="name" name="name" ></input>
        </div>
        <div className='menuRow'>
          <label htmlFor="exportId">Export ID</label>
          <input type="checkbox" id="exportId" name="exportId" ></input>
        </div>
        <div className='menuRow'>
          <label htmlFor="barcode">Barcode</label>
          <input type="checkbox" id="barcode" name="barcode" ></input>
        </div>
        <div className='menuRow'>
          <label htmlFor="grade">Grade</label>
          <input type="checkbox" id="grade" name="grade" ></input>
        </div>
      </form>
    )
  }
}

export default Menu;