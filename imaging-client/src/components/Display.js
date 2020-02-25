import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import Card from './Card';

const Display = () => {
  const [stageWidth, setStageWidth] = useState(window.innerWidth * .75);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setStageWidth(window.innerWidth * .75);
      setStageHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return(
    <Stage className='stage'
      width={stageWidth}
      height={stageHeight}
    >
      <Layer>
        <Card />
      </Layer>
    </Stage>
  )
}

export default Display;