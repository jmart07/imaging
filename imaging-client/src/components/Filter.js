import React from 'react';
import { connect } from 'react-redux';

const Filter = ({templates}) => {

  return(
    <div className="filter">
      <select>
        {templates.map((template) => {
          return <option value={template.name}>{template.name}</option>
        })}
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('filter', state)
  return{
    templates: state.templates
  }
}

export default connect(mapStateToProps)(Filter);