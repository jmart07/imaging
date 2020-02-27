import React from 'react';
import { connect } from 'react-redux';

const Checklist = ({ checklist, toggleCheck }) => {
  return(
    <form className='menu'>
      <div className='menuRow'>
        <label htmlFor="idNumber">ID Number</label>
        <input type="checkbox" id="idNumber" name="idNumber" checked={checklist.idNumber} onChange={toggleCheck}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="name">Name</label>
        <input type="checkbox" id="name" name="name" checked={checklist.name} onChange={toggleCheck}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="exportId">Export ID</label>
        <input type="checkbox" id="exportId" name="exportId" checked={checklist.exportId} onChange={toggleCheck}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="barcode">Barcode</label>
        <input type="checkbox" id="barcode" name="barcode" checked={checklist.barcode} onChange={toggleCheck}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="grade">Grade</label>
        <input type="checkbox" id="grade" name="grade" checked={checklist.grade} onChange={toggleCheck}></input>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  return{
    checklist: state.checklist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCheck: (id)=> dispatch({type: 'TOGGLE_CHECK', checkId: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);