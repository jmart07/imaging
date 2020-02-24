import React, { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Portrait = ({ isSelected }) => {

  const portraitRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if(isSelected) {
      trRef.current.setNode(portraitRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const [portrait] = useImage('https://konvajs.org/assets/lion.png');

  return(
    <>
      <Image
        onClick={()=> console.log('click')}
        image={portrait}
        ref={portraitRef}
        x={10}
        y={10}
        width={100}
        height={100}
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

export default Portrait;