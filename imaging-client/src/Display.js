import React from 'react';
import { Stage, Layer, Star } from 'react-konva';

class Display extends React.Component {
  render() {
    return(
      <Stage width={500} height={500}>
        <Layer>
          <Star
            x={100}
            y={100}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            draggable
          />
        </Layer>
      </Stage>
    )
  }
}

export default Display;