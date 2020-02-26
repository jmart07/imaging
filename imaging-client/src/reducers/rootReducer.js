const initState = {
  layouts: [{
    id: 1,
    name: "default",
    idShow: 1,
    idX: 100,
    idY: 100,
    nameShow: 1,
    nameX: 100,
    nameY: 100,
    photoShow: 1,
    photoX: 100,
    photoY: 100
  }],
  selectedID: 0
}

const rootReducer = (state = initState, action) => {
  // console.log(action);
  return state;
}
 
export default rootReducer;