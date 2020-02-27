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
  },
  checklist: {
    idNumber: false,
    name: false,
    exportId: false,
    barcode: false,
    grade: false
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
    
    case 'TOGGLE_CHECK':
      const checkedId = action.checkId.target.id;

      return {
        ...state,
        checklist: {
          ...state.checklist,
          [checkedId]: !state.checklist.checkId
        }

      }

    default:
      return state;
  }
}
 
export default rootReducer;