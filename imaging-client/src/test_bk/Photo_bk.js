import React, { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Photo = (shapeProps, isSelected, onSelect, onChange) => {
  console.log('photo')
  console.log(shapeProps)

  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if(isSelected) {
      console.log('isselected')
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
  
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  
  return(
    <>
      <Image
        image={image}
        onClick={onSelect}
        ref={shapeRef}
        { ...shapeProps }
        draggable
        onDragEnd={(e) => {
          console.log('drag end');
          console.log(e.target.x());
          // onChange({
          //   ...shapeProps,
          //   x: e.target.x(),
          //   y: e.target.y()
          // })
        }}
        onTransformEnd={e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          // onChange({
          //   ...shapeProps,
          //   x: node.x(),
          //   y: node.y(),
          // });
        }}
      />
      {isSelected && (
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

export default Photo;