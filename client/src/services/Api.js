import axios from 'axios';

export default () => axios.create({
// create an axios object will point to our backend url (8081)
  baseURL: 'http://localhost:8081/',
})
;
