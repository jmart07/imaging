import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Text, Transformer } from "react-konva";

const BarcodeInner = ({shapeProps, isSelected, isVisible, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // attaching transformer to node manually with refs
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
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

const Barcode = ({shape, isVisible, selectedId, selectShape, setShape }) => {
  return (
    <>
      <BarcodeInner
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
  return{
    selectedId: state.selectedId,
    isVisible: state.checklist.barcode,
    shape: state.shapes.find((shape) => shape.type === 'barcode')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'GET_SHAPE', shapeId: id}),
    setShape: (id, attrs) => dispatch({type: 'SET_SHAPE', shapeId: id, shapeAttrs: attrs})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Barcode);
  