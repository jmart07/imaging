import React, { useState, useEffect } from 'react';
import { Stage, Layer, Star } from 'react-konva';

const Display = () => {
  const [stageDimensions, setStageDimensions] = useState([
    { width: window.clientWidth * .75 },
    { height: window.clientHeight }
  ]);

  useEffect(() => {
    console.log('useEffect run');
    const handleResize = () => {
      setStageDimensions({
        width: window.clientWidth * .75,
        height: window.clientHeight
      }); 

      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);

  });

  return(
    <Stage className='stage'
      width={stageDimensions.width}
      height={stageDimensions.height}
    >
      <Layer>
        <Star
          x={100}
          y={100}
          numPoints={10}
          innerRadius={50}
          outerRadius={60}
          fill="#89b717"
          draggable
        />
      </Layer>
    </Stage>
  )
}

export default Display;