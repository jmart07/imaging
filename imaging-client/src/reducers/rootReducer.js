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
        id: "photo1"
      }
    ]
  }
}

const rootReducer = (state = initState, action) => {
  console.log('root reducer');
  console.log('state', state);
  console.log('action', action);

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
          [action.shapeType]: action.newShapes
        }
      }
      
    default:
      return state;
  }
}
 
export default rootReducer;