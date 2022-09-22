import axios from "axios";
const KEY = 'AIzaSyDSv9Gb5ijd58Czl9FN6xIpkCyR0KxjKqk';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  method: 'GET',
  params: {
    key: KEY,
    type: 'video',
    part: 'snippet',
    maxResults: 5
  }
});

export default youtube;
