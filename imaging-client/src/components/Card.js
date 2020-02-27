import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const Card = (props) => {

  return (
    <>
      <Photo />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    // layout: state.layouts.find(layout => layout.id === 1),
    // selectedId: state.selectedId
  }
}

export default connect(mapStateToProps)(Card);