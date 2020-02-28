import initState from './initialState';

const rootReducer = (state = initState, action) => {
  console.log('root reducer');
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {

    case 'GET_SHAPE':
      return{
        ...state,
        selectedId: action.shapeId
      }

    case 'SET_SHAPE':
      const newShapes = state.shapes.map((shape) => {
        if(shape.id !== action.shapeId) {
          return shape;
        }
        return action.shapeAttrs;
      })

      return {
        ...state,
        shapes: newShapes
      }
    
    case 'TOGGLE_CHECK':
      const checkedId = action.checkId.target.id;

      return {
        ...state,
        checklist: {
          ...state.checklist,
          [checkedId]: !state.checklist[checkedId]
        }

      }

    default:
      return state;
  }
}
 
export default rootReducer;

// const initState = {
//   layouts: [
//     { id: 1, name: "student" },
//     { id: 2, name: "faculty" }
//   ],
//   selectedId: '',
//   shapes: {
//     photos: [
//       {
//         x: 10,
//         y: 10,
//         width: 100,
//         height: 100,
//         id: uuid(),
//         visible: true
//       }
//     ],
//     texts: [
//       {
//         x: 100,
//         y: 100,
//         text: 'blah blah',
//         id: uuid(),
//         visible: true
//       }
//     ]
//   },
//   checklist: {
//     idNumber: false,
//     photo: false,
//     name: false,
//     exportId: false,
//     barcode: false,
//     grade: false
//   }
// }