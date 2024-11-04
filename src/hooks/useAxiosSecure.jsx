import axios from 'axios';
import React from 'react';


const axiosSSecure = axios.create({
    baseURL: 'http://localhost:5000/', // Replace with your API endpoint
    // headers: {
    //     'Authorization': 'Bearer YOUR_API_TOKEN' // Replace with your API token
    // }  // Add any other headers you need for your API requests  // e.g., 'Content-Type': 'application/json'  // or 'Accept': 'application/json'  // etc.  // Make sure to replace YOUR_API_TOKEN with your actual API token.  // Make sure to handle token expiration and refresh logic as needed.  // e.g., use useEffect to check token expiration and refresh it if necessary.  // Also, consider using a library like axios-jwt-auth or react-jwt to handle JWT authentication.  // Make sure to handle any potential errors or exceptions that may occur during API requests.  // e.g., use try/catch blocks or error boundaries.  // Make sure to use appropriate error handling strategies
})

const useAxiosSecure = () => {
    return axiosSSecure;
};

export default useAxiosSecure;