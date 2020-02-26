const initState = {
  layouts: [
    { id: 1, name: "student" },
    { id: 2, name: "faculty" }
  ],
  elements: [
    { id: 1, layout_id: 1, type: "photo", x: 0, y: 0, width: 100, height: 100},
    { id: 2, layout_id: 1, type: "id", x: 0, y: 0, width: 100, height: 100},
    { id: 3, layout_id: 1, type: "name", x: 0, y: 0, width: 100, height: 100}
  ],
  selectedId: 0
}

const rootReducer = (state = initState, action) => {
  // console.log(action);
  return state;
}
 
export default rootReducer;