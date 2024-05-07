import {jwtDecode} from 'jwt-decode';

// Assuming you have the JWT token stored in a variable called 'token'
const token = localStorage.getItem('token');

// Decode the token
const decodedToken = jwtDecode(token);

// Now you can access the decoded token properties
console.log(decodedToken);
