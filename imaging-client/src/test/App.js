import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, ReactReduxContext } from 'react-redux';
// import Card from './Card';
// import Photos from './Photos';
import App from './Rectangle';
import PhotoContainer from './PhotoContainer';

const Canvas = () => {
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
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Stage className='stage' width={stageWidth} height={stageHeight}>
          <Provider store={store}>
            <Layer>
              {/* <Photos /> */}
              <PhotoContainer />
            </Layer>
          </Provider>
        </Stage>
      )}
    </ReactReduxContext.Consumer>
  )
}

export default Canvas;