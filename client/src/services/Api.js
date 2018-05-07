import axios from 'axios';
import store from '@/store/store';

export default () => axios.create({
// create an axios object will point to our backend url (8081)
  baseURL: 'http://localhost:8081/',
  headers: {
    Authorization: `Bearer ${store.state.token}`,
  },
})
;
