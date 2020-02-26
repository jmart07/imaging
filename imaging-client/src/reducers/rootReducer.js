const initState = {
  layouts: [
    { id: 1, name: "student" },
    { id: 2, name: "faculty" }
  ],
  selectedId: 0,
  elements: {
    photos: [
      {id: 1, x: 10, y: 10, width: 50, height: 50},
      {id: 2, x: 0, y: 0, width: 100, height: 100}
    ]
  }
}

const rootReducer = (state = initState, action) => {
  console.log('root reducer');
  console.log(state.elements.photos);
  console.log(action);

  switch (action.type) {
    case 'UPDATE_PHOTO':
      console.log('update photo')
      const newPhotos = state.elements.photos.map((photo) => {
        if(photo.id !== action.shape.id) {
          return photo;
        }
        return action.shape;
      });

      return {
        ...state,
        elements: {
          ...state.elements,
          photos: [...newPhotos]
        }
      }

      default:
      return state;
  }




  // if (action.type === 'UPDATE_SHAPE') {
  //   console.log('updating shape')
  //   console.log(state)

  //   const newPhotos = state.elements.photos.map((shape) => {
  //     if(shape.id !== action.shape.id) {
  //       return shape
  //     }
  //   }

  // }


}
 
export default rootReducer;