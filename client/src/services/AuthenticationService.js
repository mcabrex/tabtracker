import Api from '@/services/Api';
// imports an Api object from the Api file in services, basically just the axios

export default {
  register(credentials) {
    return Api().post('register', credentials);
    // email and password to post method, post request to register endpoint
  },
  login(credentials) {
    return Api().post('login', credentials);
    // pass an email and password to post method, will make ]request to a register endpoint
  },
};

// AuthenticationService.register({
//     email: 'tester@gmail.com',
//     password: 'badabing'
// })
