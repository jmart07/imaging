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
      text: '1234567',
      fontSize: 30
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
      text: 'John Martin',
      fontSize: 30
    },
    {
      id: uuid(),
      type: 'exportId',
      x: 390,
      y: 150,
      text: 'EXPORTID',
      fontSize: 30
    },
    {
      id: uuid(),
      type: 'barcode',
      x: 130,
      y: 300,
      text: 'BARCODE',
      fontSize: 100
    },
    {
      id: uuid(),
      type: 'grade',
      x: 390,
      y: 240,
      text: 'Class of 2020',
      fontSize: 30
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