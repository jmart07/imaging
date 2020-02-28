import React from "react";
import { Image, Transformer } from "react-konva";
import useImage from 'use-image';

const Photo = ({ shapeProps, isVisible, isSelected, onSelect, onChange }) => {
  const photoRef = React.useRef();
  const photoTrRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // attaching transformer to node manually with refs
      photoTrRef.current.setNode(photoRef.current);
      photoTrRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const [image] = useImage('https://konvajs.org/assets/lion.png');

  return (
    <>
      <Image
        image={image}
        onClick={onSelect}
        ref={photoRef}
        {...shapeProps}
        visible={isVisible}
        draggable
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={e => {
          // transform uses scale but then maps new width/height to store
          const node = photoRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // reset scale to match data better (according to documentation)
          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={photoTrRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default Photo;