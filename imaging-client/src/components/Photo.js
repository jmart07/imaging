import React, { useEffect, useRef } from 'react';
import { connect, shallowEqual } from 'react-redux';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Photo = (props, transformShape) => {

  const shapeRef = useRef();
  const trRef = useRef();

  console.log('photo')
  console.log(props.photo)

  const isSelected = props.selectedId === props.photo.id()

  useEffect(() => {
    console.log('useEffect photo');
    if(isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  
  const [image] = useImage('https://konvajs.org/assets/lion.png');

  const onSelect = (e) => {
    console.log('onselect')
    console.log(props.selectShape(props.photo.id))
    // props.selectShape(e.target.id)
  }
  
  return(
    <>
      <Image
        image={image}
        isSelected={props.photo.id === props.selectedId}
        onClick={onSelect}
        ref={shapeRef}
        { ...props.photo }
        draggable
        onDragEnd={(e) => {
          console.log('drag end')
          props.transformShape(
            {
              ...props.photo,
              x: e.target.x(),
              y: e.target.y()
          });
        }}
        // onTransformEnd
      />
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    selectedId: state.selectedId,
    photo: state.elements.photos.find(element => element.id === state.selectedId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'SELECT_SHAPE', id: id}),
    transformShape: (shape) => dispatch({type: 'UPDATE_PHOTO', shape: shape})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);