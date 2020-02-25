import React, { useState } from 'react';
import { Rect } from 'react-konva';
import Portrait from './Portrait';
import { connect } from 'react-redux';

const Card = (props) => {
  const cardWidth = 2 * (3.375 * 96);
  const cardHeight = 2 *(2.125 * 96);
  const cornerRadius = 2 * ((1/8) * 96);

  const [portrait, setPortrait] = useState({
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    id: 'portrait1'
  });
  const [selectedId, selectPortrait] = useState();

  return (
    <>
      <Rect
        x={30}
        y={30}
        width={cardWidth}
        height={cardHeight}
        fill="ivory"
        cornerRadius={cornerRadius}
        shadowBlur={10}
      />
      <Portrait
        shapeProps={portrait}
        isSelected={portrait.id === selectedId}
        onSelect={() => {
          selectPortrait(portrait.id);
        }}
        onChange={newAttrs => {
          setPortrait(newAttrs);
        }}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    test: 'test'
  }
}
 
export default connect(mapStateToProps)(Card);