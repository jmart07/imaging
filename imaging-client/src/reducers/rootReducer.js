import initState from './initialState';

const rootReducer = (state = initState, action) => {
  console.log('root reducer');
  console.log('state', state);
  console.log('state templates', state.templates)
  console.log('action', action);

  switch (action.type) {

    case 'GET_SHAPE':
      return {
        ...state,
        selectedId: action.shapeId
      }

    case 'STORE_SHAPE':
      console.log('store_shape')

      const foundTemplate = state.templates.find((t) => {
        console.log(state.templateId)
        console.log(t.id)

        return state.templateId == t.id
      })
      console.log('foundtemplate', foundTemplate);

      const newShapes = foundTemplate.shapes.map((shape) => {
        if(shape.id !== action.shapeId) {
          return shape;
        }
        console.log(shape.id)
        console.log(action.shapeId)
        return action.attrs;
      })

      console.log('newshapes', newShapes)

      const newTemplates = state.templates.map((t) => {
        // console.log(t.id)
        // console.log(state.templateId)
        if(t.id !== state.templateId) {
          return t;
        }
        t.shapes = newShapes;
        return t;
      })

      console.log('newtemplates', newTemplates)

      return {
        ...state,
        templates: newTemplates
      }
    
    case 'TOGGLE_CHECK':
      const checkedId = action.checkId;

      return {
        ...state,
        checklist: {
          ...state.checklist,
          [checkedId]: !state.checklist[checkedId]
        }
      }
    
    case 'STORE_STUDENTS':
      return {
        ...state,
        students: action.newStudents
      }

    case 'STORE_TEMPLATES':
     
      return {
        ...state,
        templates: action.newTemplates
      }

    case 'STORE_TEMPLATE_ID':
      return {
        ...state,
        templateId: action.templateId
      }

    default:
      return state;
  }
}
 
export default rootReducer;