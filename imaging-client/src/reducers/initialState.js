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
      x: 390,
      y: 120,
      width: 160,
      height: 40,
      text: '1234567'
    },
    {
      id: uuid(),
      type: 'photo',
      x: 80,
      y: 60,
      width: 230,
      height: 230
    },
    {
      id: uuid(),
      type: 'name',
      x: 390,
      y: 90,
      text: 'John Martin'
    },
    {
      id: uuid(),
      type: 'exportId',
      x: 390,
      y: 180,
      text: 'EXPORTID'
    },
    {
      id: uuid(),
      type: 'barcode',
      x: 130,
      y: 300,
      text: 'BARCODE'
    },
    {
      id: uuid(),
      type: 'grade',
      x: 390,
      y: 240,
      text: 'Class of 2020'
    }
  ],
  checklist: {
    idNumber: true,
    photo: true,
    name: true,
    exportId: true,
    barcode: true,
    grade: true
  }
}

export default initState;