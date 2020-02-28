import React from 'react';
import { connect } from 'react-redux';
import TextShape from './TextShape';

const TextsContainer = ({ texts, selectedId, selectShape, setTexts }) => {
  return (
    <>
      {texts.map((text, i) => {
        return (
          <TextShape
            key={i}
            shapeProps={text}
            isSelected={text.id === selectedId}
            onSelect={() => {
              selectShape(text.id);
            }}
            onChange={newAttrs => {
              const newTexts = texts.slice();
              newTexts[i] = newAttrs;
              setTexts(newTexts);
            }}
          />
        );
      })}
    </>
  );
};
  
const mapStateToProps = (state) => {
  return{
    selectedId: state.selectedId,
    texts: state.shapes.texts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectShape: (id) => dispatch({type: 'SELECT_SHAPE', shapeId: id}),
    setTexts: (texts) => dispatch({type: 'SET_SHAPE', shapeType: 'texts', newShapes: texts})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextsContainer);
  