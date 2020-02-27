import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const Photos = (props) => {
  return (
    <>
      {props.photos.map((photo, i) => {
        console.log(photo);
        return (
          <Photo
            key={i}
            shapeProps={photo}
            isSelected={photo.id === props.selectedId}
            onSelect={() => {
              console.log(photo.id)
              props.selectShape(photo.id);
            }}
            // onChange={(newAttrs) => {
            //   console.log(newAttrs)
            //   props.transformShape(newAttrs);
            // }}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('mapstatetoprops')
  console.log(...state.elements.photos)
  return{
    selectedId: state.selectedId,
    photos: [...state.elements.photos]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'SELECT_SHAPE', shapeId: id})
    // transformShape: (shape) => dispatch({type: 'TRANSFORM_SHAPE', shape: shape})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);