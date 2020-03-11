import axios from 'axios';

const fetchStudents = async () => {
  return await axios.get('', data)
  .then((response) => {
    console.log('response',response.data)
    return response.data})
  .catch((error) => console.log(error));
}

export default fetchStudents;