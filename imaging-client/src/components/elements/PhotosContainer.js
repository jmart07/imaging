import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const PhotosContainer = ({photos, selectedId, selectShape, setPhotos }) => {
  return (
    <>
        {photos.map((photo, i) => {
          return (
            <Photo
              key={i}
              shapeProps={photo}
              isSelected={photo.id === selectedId}
              onSelect={() => {
                selectShape(photo.id);
              }}
              onChange={newAttrs => {
                const newPhotos = photos.slice();
                newPhotos[i] = newAttrs;
                setPhotos(newPhotos);
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
    photos: state.shapes.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'SELECT_SHAPE', shapeId: id}),
    setPhotos: (photos) => dispatch({type: 'SET_SHAPE', shapeType: 'photos', newShapes: photos})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
  