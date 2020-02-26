import React from 'react';
import { Image } from 'react-konva';
import { connect } from 'react-redux';

const Card = (props) => {

  console.log(props.layout);

  return (
    <>
    <Photo
      shapeProps={props.layout.photoX, props.layout.photoY}
      isSelected={photo.id === selectedId}
      onSelect={() => {
        this.props.selectPhoto(photo.id);
      }}
      onChange={newAttrs => {
        this.props.setPhoto(newAttrs);
      }}
    />
  </>

    <Image
      x={100}
      y={100}
      height={100}
      width={100}
      fill="black" />
  );
}

const mapStateToProps = (state) => {
  return {
    layout: state.layouts.find(layout => layout.id === 1),
    selectedId: state.selectedId
  }
}

export default connect(mapStateToProps)(Card);