import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Photo = (props) => {

  console.log(props.element);

  const photoRef = useRef();
  const trRef = useRef();

  const isSelected = props.selectedId === props.element.id

  useEffect(() => {
    if(isSelected) {
      trRef.current.setNode(photoRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const [image] = useImage('https://konvajs.org/assets/lion.png');
  
  const onSelect = () => {
    console.log('onselect');
  }


  return(
    <>
      <Image
        onClick={onSelect}
        image={image}
        ref={photoRef}
        {...props.element}
        draggable
      />
      { isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            return newBox;
          }}
        />
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    selectedId: state.selectedId,
    element: state.elements.find(element => element.id === 1 && element.type === 'photo')
  }
}

export default connect(mapStateToProps)(Photo);