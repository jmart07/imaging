import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Photo = (props, transformShape) => {

  const shapeRef = useRef();
  const trRef = useRef();

  const isSelected = props.selectedId

  useEffect(() => {
    console.log('useEffect photo');
    if(isSelected) {
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  
  const onSelect = () => {
    console.log('onselect');
  }

  const [image] = useImage('https://konvajs.org/assets/lion.png');
  
  return(
    <>
      <Image
        image={image}
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
      />
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('map')
  console.log(state.elements.photos.find(element => element.id === 1))

  return{
    selectedId: state.selectedId,
    photo: state.elements.photos.find(element => element.id === 1)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    transformShape: (shape) => dispatch({type: 'UPDATE_PHOTO', shape: shape})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);