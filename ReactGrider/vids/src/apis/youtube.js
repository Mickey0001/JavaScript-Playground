import axios from 'axios';

const KEY = 'AIzaSyDgLBKYdrkrWVx2Sfbkv73Fgihts-P1exo';

export default axios.create(
{
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

