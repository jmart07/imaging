import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, ReactReduxContext } from 'react-redux';
import Card from './elements/Card';
import PhotosContainer from './elements/PhotosContainer';
import TextsContainer from './elements/TextsContainer';

const Canvas = () => {
  // using local state to store stage sizes for dynamic rendering
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
    // need to bridge store to children of Stage because Stage creates a "fresh renderer"
    // https://github.com/konvajs/react-konva/issues/311
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Stage className='stage' width={stageWidth} height={stageHeight}>
          <Provider store={store}>
            <Layer>
              <Card />
              <PhotosContainer />
              <TextsContainer />
            </Layer>
          </Provider>
        </Stage>
      )}
    </ReactReduxContext.Consumer>
  )
}

export default Canvas;