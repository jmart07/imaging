import axios from 'axios';

const fetchStudents = async () => {
  return await axios.get('http://localhost:3000/students')
  .then((response) => {
    console.log('response',response.data)
    return response.data})
  .catch((error) => console.log(error));
}

export default fetchStudents;