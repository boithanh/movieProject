import axios from 'axios';
const http = axios.create({
  baseURL: 'https://movieservice-oeai.onrender.com/movie',
  timeout: 5000,
  headers: {}
});

async function getMovie() {
    const response = await http.get('/');
    return response;
}

async function getHotMovie() {
    const response = await http.get('/hot');
    return response;  
}

export {getMovie,getHotMovie}
