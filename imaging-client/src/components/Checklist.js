import React from 'react';
import { connect } from 'react-redux';

const Checklist = ({ checklist, shapes, toggleCheck, setShape }) => {
  const handleChange = (e) => {
    const newShapes = shapes.map((s) => {
      if(s.shape_type !== e.target.id) {
        return s
      }
      s.visible = !s.visible
      return s
    })

    console.log(newShapes)
    setShape(newShapes);
    toggleCheck(e.target.id);
  }


  return(
    <form className='menu'>
      <div className='menuRow'>
        <label htmlFor="idNumber">ID Number</label>
        <input type="checkbox" id="idNumber" name="idNumber" checked={checklist.idNumber} onChange={handleChange}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="photo">Photo</label>
        <input type="checkbox" id="photo" name="photo" checked={checklist.photo} onChange={handleChange}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="name">Name</label>
        <input type="checkbox" id="name" name="name" checked={checklist.name} onChange={handleChange}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="exportId">Export ID</label>
        <input type="checkbox" id="exportId" name="exportId" checked={checklist.exportId} onChange={handleChange}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="barcode">Barcode</label>
        <input type="checkbox" id="barcode" name="barcode" checked={checklist.barcode} onChange={handleChange}></input>
      </div>
      <div className='menuRow'>
        <label htmlFor="grade">Grade</label>
        <input type="checkbox" id="grade" name="grade" checked={checklist.grade} onChange={handleChange}></input>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => {
  const foundShapes = state.templates.find((t) => state.templateId).shapes;

  return{
    checklist: state.checklist,
    templateId: state.templateId,
    shapes: foundShapes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCheck: (id)=> dispatch({type: 'TOGGLE_CHECK', checkId: id}),
    setShape: (shapeId, attrs) => dispatch({type: 'STORE_SHAPE', shapeId: shapeId, attrs: attrs})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);