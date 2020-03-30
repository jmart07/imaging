import axios from 'axios';

const fetchStudents = async () => {
  return await axios.get('https://imaging-api-heroku.herokuapp.com/students')
  .then((response) => {
    console.log('response',response.data)
    return response.data})
  .catch((error) => console.log(error));
}

export default fetchStudents;