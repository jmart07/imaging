import React, { Component } from 'react';
import { Rect } from 'react-konva';
import useImage from 'use-image';
import { connect } from 'react-redux';

class Card extends Component {
  render() {
    console.log('card mount');
    
    // const [image] = useImage('https://konvajs.org/assets/lion.png');
    // console.log(image);

    return (
      <>
        <Rect />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Card);
// export default Card;