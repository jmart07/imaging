import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const PhotosContainer = (props) => {
  return (
    <>
        {props.photos.map((photo, i) => {
          return (
            <Photo
              key={i}
              shapeProps={photo}
              isSelected={photo.id === props.selectedId}
              onSelect={() => {
                props.selectShape(photo.id);
              }}
              onChange={newAttrs => {
                const newPhotos = props.photos.slice();
                newPhotos[i] = newAttrs;
                props.setPhotos(newPhotos);
              }}
            />
          );
        })}
      </>
  );
};
  
  const mapStateToProps = (state) => {
    return{
      selectedId: state.selectedId,
      photos: state.elements.photos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      selectShape: (id) => dispatch({type: 'SELECT_SHAPE', shapeId: id}),
      setPhotos: (photos) => dispatch({type: 'SET_SHAPE', shapeType: 'photos', newShapes: photos})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
  