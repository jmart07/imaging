import React, { Component, useState } from 'react';
// import { Rect } from 'react-konva';
import Photo from './Photo';
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    console.log('card mount');
    const photo = this.props.photo;
    console.log(photo);
    const selectedId = this.props.selectedId;
    console.log(selectedId);

    return (
      <>
        <Photo
          shapeProps={photo}
          isSelected={photo.id === selectedId}
          onSelect={() => {
            this.props.selectPhoto(photo.id);
          }}
          onChange={newAttrs => {
            this.props.setPhoto(newAttrs);
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.templates[0],
    selectedId: state.selectedId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectPhoto: (id) => dispatch({ type: 'GET_PHOTO', id: id }),
    setPhoto: (newAttrs) => dispatch({ type: 'SET_PHOTO', newAttrs: newAttrs })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);