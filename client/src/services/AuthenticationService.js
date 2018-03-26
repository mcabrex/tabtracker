import Api from '@/services/Api';
// imports an Api object that we are importing from the Api file in services, which will basically just be the axios we created

export default {
  register(credentials) {
    return Api().post('register', credentials);
    // pass an email and password to this post method which will make a post request to a register endpoint on our express server and pass it the credentials
  },
};

// AuthenticationService.register({
//     email: 'tester@gmail.com',
//     password: 'badabing'
// })
