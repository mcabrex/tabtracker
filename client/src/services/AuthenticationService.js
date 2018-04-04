import Api from '@/services/Api';
// imports an Api object from the Api file in services, basically just the axios

export default {
  register(credentials) {
    return Api().post('register', credentials);
    // email and password to post method, post request to register endpoint on express server with credentials
  },
  login(credentials) {
    return Api().post('login', credentials);
    // pass an email and password to this post method which will make a post request to a register endpoint on our express server and pass it the credentials
  },
};

// AuthenticationService.register({
//     email: 'tester@gmail.com',
//     password: 'badabing'
// })
