import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import { Provider, ReactReduxContext } from 'react-redux';
import Card from './shapes/Card';
import IdNumber from './shapes/IdNumber';
import Photo from './shapes/Photo';
import Name from './shapes/Name';
import ExportId from './shapes/ExportId';
import Barcode from './shapes/Barcode';
import Grade from './shapes/Grade';

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
              <IdNumber />
              <Photo />
              <Name />\
              <ExportId />
              <Barcode className='barcode' />
              <Grade />
            </Layer>
          </Provider>
        </Stage>
      )}
    </ReactReduxContext.Consumer>
  )
}

export default Canvas;