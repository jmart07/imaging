import React from 'react';
import { connect } from 'react-redux';
import { Image, Transformer } from "react-konva";
import useImage from 'use-image';

const PhotoInner = ({shapeProps, isSelected, isVisible, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  const [image1] = useImage('https://konvajs.org/assets/lion.png');
  // const [image2] = useImage('https://i.imgur.com/IZ3Vf9N.jpg');

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
        image={image1}
        onClick={onSelect}
        ref={shapeRef}
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

const Photo = ({shape, isVisible, selectedId, selectShape, setShape }) => {
  return (
    <>
      <PhotoInner
        shapeProps={shape}
        isVisible={isVisible}
        isSelected={shape.id === selectedId}
        onSelect={() => {
          selectShape(shape.id);
        }}
        onChange={newAttrs => {
          setShape(shape.id, newAttrs);
        }}
      />
    </>
  );
}
  
const mapStateToProps = (state) => {
  const foundShapes = state.templates.find((t) => state.templateId).shapes
  const foundShape = foundShapes.find((shape) => shape.shape_type === 'photo')

  return{
    selectedId: state.shapeId,
    isVisible: state.checklist.photo,
    shape: foundShape
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'GET_SHAPE', shapeId: id}),
    setShape: (shapeId, attrs) => dispatch({type: 'STORE_SHAPE', shapeId: shapeId, attrs: attrs})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
  