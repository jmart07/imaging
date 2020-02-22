import React from 'react';
import { Stage, Layer, Star } from 'react-konva';

class Display extends React.Component {
  state = {
    stageWidth: 0,
    stageHeight: 0
  }

  componentDidMount() {
    console.log('stage mounted');
    this.fitStageToContainer();
  }

  fitStageToContainer() {
    const container = document.querySelector('.container');
    console.log(container);
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    console.log(containerWidth);
    console.log(containerHeight)

    this.setState({
      stageWidth: containerWidth * .75,
      stageHeight: containerHeight
    });
  }

  render() {
    console.log('rendering display');
    return(
      <Stage className='stage'
        width={this.state.stageWidth}
        height={this.state.stageHeight}
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
}

export default Display;