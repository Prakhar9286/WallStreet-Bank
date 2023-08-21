import axios from 'axios';
/*
  Axios, which is a popular library is mainly used to send asynchronous 
  HTTP requests(GET,POST,PUT,DELETE) to REST endpoints. 
This library is very useful to perform CRUD operations.
This popular library is used to communicate with the backend. 
Axios supports the Promise API, native to JS ES6.
Using Axios we make API requests in our application. 
Once the request is made we get the data in Return, and then we use this data in our React APPL. 

> npm install axios

*/
// Service class interacts with REST API
class AuthenticationService {

  static setSessionAttribute(key, value) {
    localStorage.setItem(key, value);
  }

  static async registerDealer(dealer) {
    try {
      const response = await axios.post('http://localhost:8085/obs/api/register', dealer); // Adjust the API endpoint
      return response.data;
    } catch (error) {
      console.error('Registration error', error);
      throw new Error('An error occurred during registration.');
    }
  }

  static async registerDealer1(dealer){
    return axios.post('http://localhost:8085/obs/api/register', dealer);
   }

   /*
    The async function declaration creates a binding of a new async function to a 
    given name. 
The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior 
to be written in a cleaner style and avoiding the need to explicitly configure promise chains.
They are not coordinated with each other, meaning they could occur simultaneously or not 
because they have their own separate agenda.   
*/ 
  static async login(dealer) {
    try {
      const response = await axios.post('http://localhost:8085/obs/api/login', dealer);
      console.log('SAPI response:', response.data +"Hello"+response.data.success); 
      if (response.data === true) {
        // Call the setSessionAttribute method to store the session token or user info
        this.setSessionAttribute('sessionToken', response.data.sessionToken); // Adjust as needed
        return true; // Return true for successful login
      } else {
        return false; // Return false for unsuccessful login
      }
    } catch (error) {
      console.error('Login error', error);
      throw new Error('An error occurred during login.');
    }
  }
}

export default AuthenticationService;
