import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const PhotosContainer = () => {
    return(
        <Photo />
    )
}

const mapStateToProps = (state) => {
    return{
      selectedId: state.selectedId
    }
  }

export default connect(mapStateToProps)(PhotosContainer);