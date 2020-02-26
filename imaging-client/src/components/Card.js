import React, { Component } from 'react';
import { Rect } from 'react-konva';
import useImage from 'use-image';
import { connect } from 'react-redux';

const Card = (props) => {

  console.log(props.layouts);

  return (
    <Rect x={100} y={100} height={100} width={100} fill="black" />
  );
}

const mapStateToProps = (state) => {
  return {
    layouts: state.layouts
  }
}

export default connect(mapStateToProps)(Card);