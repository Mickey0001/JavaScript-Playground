import axios from 'axios';

const KEY = 'AIzaSyD0ECTudvMERFbocXcMbFsLAXwE3GZQjp4';

export default axios.create(
{
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

