import uuid from 'react-uuid';

const initState = {
  layouts: [
    { id: 1, name: "student" },
    { id: 2, name: "faculty" }
  ],
  selectedId: '',
  shapes: [
    {
      id: uuid(),
      type: 'idNumber',
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      text: '1234567'
    },
    {
      id: uuid(),
      type: 'photo',
      x: 10,
      y: 10,
      width: 100,
      height: 100
    },
    {
      id: uuid(),
      type: 'name',
      x: 100,
      y: 100,
      text: 'John Martin'
    }
  ],
  checklist: {
    idNumber: false,
    photo: false,
    name: false,
    exportId: false,
    barcode: false,
    grade: false
  }
}

export default initState;