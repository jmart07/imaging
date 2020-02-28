import React from 'react';
import { connect } from 'react-redux';
import { Image, Transformer } from "react-konva";
import useImage from 'use-image';

const PhotoInner = ({shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  const [image] = useImage('https://konvajs.org/assets/lion.png');

  React.useEffect(() => {
    if (isSelected) {
      // attaching transformer to node manually with refs
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        image={image}
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
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
          const node = shapeRef.current;
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
            height: Math.max(5, node.height() * scaleY)
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
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

const Photo = ({shape, selectedId, selectShape, setShape }) => {
  console.log('shape',shape)
  return (
    <>
      <PhotoInner
        shapeProps={shape}
        // isVisible={photoVisible}
        isSelected={shape.id === selectedId}
        onSelect={() => {
          selectShape(shape.id);
        }}
        onChange={newAttrs => {
          console.log('newattrs', newAttrs)
          setShape(shape.id, newAttrs);
        }}
      />
    </>
  );
}
  
const mapStateToProps = (state) => {
  console.log('namesmapstate', state)
  return{
    selectedId: state.selectedId,
    shape: state.shapes.find((shape) => shape.type === 'photo')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'GET_SHAPE', shapeId: id}),
    setShape: (id, attrs) => dispatch({type: 'SET_SHAPE', shapeId: id, shapeAttrs: attrs})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
  