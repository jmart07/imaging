import React from 'react';
import { Rect, Image } from 'react-konva';
// import Portrait from './Portrait';

const Card = () => {
  const cardWidth = 2 * (3.375 * 96);
  const cardHeight = 2 *(2.125 * 96);
  const cornerRadius = 2 * ((1/8) * 96);

  return (
    <>
      {/* <Rect
        x={30}
        y={30}
        width={cardWidth}
        height={cardHeight}
        fill="ivory"
        cornerRadius={cornerRadius}
        shadowBlur={10}
      /> */}
      <Image
        image='/images/gnome_tile.png'
        x={10}
        y={10}
        width={50}
        height={50}
    
    
    
      />
    </>
  );
}
 
export default Card;