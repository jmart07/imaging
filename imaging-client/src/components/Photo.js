import React, { useEffect, useRef } from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

const Photo = (props) => {
  const photoRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if(isSelected) {
      trRef.current.setNode(photoRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const [image] = useImage('https://konvajs.org/assets/lion.png');
  

  return(
    <>
      <Image
        onClick={this.props.onSelect}
        image={image}
        ref={photoRef}
        {...this.props}
        draggable
      />
      { this.props.isSelected && (
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

export default connect(mapStateToProps)(Photo);