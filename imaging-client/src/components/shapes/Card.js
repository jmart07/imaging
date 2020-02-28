import React from 'react';
import { Rect } from "react-konva";

// static background shape for card profile
const Card = () => {
  // 2 * the standard card dims * 96ppi for most displays
  const cardWidth = 2 * (3.375 * 96);
  const cardHeight = 2 *(2.125 * 96);
  const cornerRadius = 2 * ((1/8) * 96);

  return (
    <>
      <Rect
        x={30}
        y={30}
        width={cardWidth}
        height={cardHeight}
        fill="white"
        cornerRadius={cornerRadius}
        shadowBlur={10}
      />
    </>
  )
}

export default Card;