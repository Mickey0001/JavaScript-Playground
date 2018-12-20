import axios from 'axios';

export default axios.create
({
  baseURL: 
    'https://api.unsplash.com',
  headers: 
    {Authorization: 'Client-ID 02861f565eb98fb2495f2402643d4ff1e5038d549fb7b8e74c4b6e0a49212035'}
});

