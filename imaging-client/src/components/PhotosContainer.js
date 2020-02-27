import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';

const PhotosContainer = (props) => {
  return (
    <>
        {props.photos.map((photo, i) => {
          console.log(photo.id)
          return (
            <Photo
              key={i}
              shapeProps={photo}
              isSelected={photo.id === props.selectedId}
              onSelect={() => {
                props.selectShape(photo.id);
              }}
              onChange={newAttrs => {
                console.log('onchange')
                console.log(newAttrs)
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
    console.log('mapstatetoprops');
    console.log(state.elements.photos)
    return{
      selectedId: state.selectedId,
      photos: state.elements.photos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    console.log('mapdispatchtoprops');
    return {
      selectShape: (id) => dispatch({type: 'SELECT_SHAPE', shapeId: id}),
      setPhotos: (photos) => dispatch({type: 'SET_PHOTOS', newPhotos: photos})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
  