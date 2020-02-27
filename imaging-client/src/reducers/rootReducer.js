const initState = {
  layouts: [
    { id: 1, name: "student" },
    { id: 2, name: "faculty" }
  ],
  selectedId: '',
  elements: {
    photos: [
      {id: 'first', x: 10, y: 10, width: 5000, height: 50},
      {id: 'second', x: 10, y: 100, width: 100, height: 100}
    ]
  }
}

const rootReducer = (state = initState, action) => {
  console.log('root reducer');
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'TRANSFORM_SHAPE':
      console.log('transform shape')

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
    
    case 'SELECT_SHAPE':
      console.log('select shape');
      console.log(action.id)
      return{
        ...state,
        selectedId: action.id
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