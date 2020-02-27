const initState = {
  layouts: [
    { id: 1, name: "student" },
    { id: 2, name: "faculty" }
  ],
  selectedId: '',
  elements: {
    photos: [
      {
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: "red",
        id: "photo1"
      },
      {
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        fill: "green",
        id: "photo2"
      }
    ]
  }
}

const rootReducer = (state = initState, action) => {
  console.log('root reducer');
  console.log(state);
  console.log(action);

  switch (action.type) {

    case 'SELECT_SHAPE':
      return{
        ...state,
        selectedId: action.shapeId
      }

    case 'SET_SHAPE':
      return {
        ...state,
        elements: {
          ...state.elements,
          photos: action.newPhotos
        }
      }
      
    default:
      return state;
  }
}
 
export default rootReducer;