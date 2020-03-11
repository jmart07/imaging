import axios from 'axios';

baseUrl = process.env.baseURL || "http://localhost:3000"

const fetchStudents = async () => {
  return await axios.get(baseURL, data)
  .then((response) => {
    console.log('response',response.data)
    return response.data})
  .catch((error) => console.log(error));
}

export default fetchStudents;