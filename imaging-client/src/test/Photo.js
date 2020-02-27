import React from "react";
import { connect } from 'react-redux';
import { Image, Transformer } from "react-konva";

const Photo = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
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
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
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

const PhotoWrapper = (props) => {
  console.log('photowrapper')
  // const [photos, setPhotos] = React.useState(initialPhotos);
  // const [selectedId, selectShape] = React.useState(null);

  console.log(props.photos)

  return (
    <>
        {props.photos.map((photo, i) => {
          console.log(photo.id)
          return (
            <Photo
              key={i}
              shapeProps={photo}
              isSelected={photo.id === props.selectedId}
              onSelect={() => {
                props.selectShape(photo.id);
              }}
              onChange={newAttrs => {
                console.log('onchange')
                console.log(newAttrs)
                const newPhotos = props.photos.slice();
                newPhotos[i] = newAttrs;
                props.setPhotos(newPhotos);
              }}
            />
          );
        })}
      </>
  );
};

const mapStateToProps = (state) => {
  console.log('mapstatetoprops');
  console.log(state.elements.photos)
  return{
    selectedId: state.selectedId,
    photos: state.elements.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapdispatchtoprops');
  return {
    selectShape: (id) => dispatch({type: 'SELECT_SHAPE', shapeId: id}),
    setPhotos: (photos) => dispatch({type: 'SET_PHOTOS', newPhotos: photos})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoWrapper);
