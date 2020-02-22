import React from 'react';

class Menu extends React.Component {
  render() {
    return(
      <form>
        <input type="checkbox" id="idNumber" name="idNumber" ></input>
        <label htmlFor="idNumber">ID Number</label>
        <input type="checkbox" id="name" name="name" ></input>
        <label htmlFor="name">Name</label>
        <input type="checkbox" id="exportId" name="exportId" ></input>
        <label htmlFor="exportId">Export ID</label>
        <input type="checkbox" id="barcode" name="barcode" ></input>
        <label htmlFor="barcode">Barcode</label>
        <input type="checkbox" id="grade" name="grade" ></input>
        <label htmlFor="grade">Grade</label>
      </form>
    )
  }
}

export default Menu;