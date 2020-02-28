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
    
    case 'UPDATE_STUDENTS':
      console.log('newstudents', action.newStudents);

      return {
        ...state,
        students: action.newStudents
      }

    case 'UPDATE_TEMPLATES':
      console.log('newtemplates', action.newTemplates);
      
      return {
        ...state,
        templates: action.newTemplates
      }

    default:
      return state;
  }
}
 
export default rootReducer;