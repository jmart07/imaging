import axios from 'axios';

const fetchTemplates = async () => {
  return await axios.get('https://imaging-api-heroku.herokuapp.com/templates')
  .then((response) => {
    console.log('response',response.data)
    return response.data})
  .catch((error) => console.log(error));
}

export default fetchTemplates;