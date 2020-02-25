import React from 'react';
import { connect } from 'react-redux';

const Test = (props) => {

  console.log(props.photos);

  return ( 
    <div>
      test
    </div>
   );
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps)(Test);