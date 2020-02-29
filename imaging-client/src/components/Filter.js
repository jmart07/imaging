import React from 'react';
import { connect } from 'react-redux';

const Filter = ({templates, templateId, selectTemplate}) => {

  const handleChange = (e) => {
    console.log(e.target.value)
    selectTemplate(e.target.value)
  }

  return(
    <div className="filter">
      <label>Template:
        <select value={templateId} onChange={handleChange}>
          {templates.map((template, i) => {
            return <option key={i} value={template.id}>{template.name}</option>
          })}
        </select>
      </label>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    templates: state.templates,
    templateId: state.templateId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTemplate: (id) => dispatch({type: 'STORE_TEMPLATE_ID', templateId: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
  