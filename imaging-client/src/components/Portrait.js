import React, { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Portrait = ({ portraitProps, isSelected, onSelect, onChange }) => {

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
        onClick={onSelect}
        image={portrait}
        ref={portraitRef}
        {...portraitProps}
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