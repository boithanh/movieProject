import axios from 'axios';
const prod='https://movieservice-oeai.onrender.com/movie';
const dev='http://localhost:3000/movie';
const http = axios.create({
  baseURL: prod,
  timeout: 5000,
  headers: {}
});

async function getLastestMovie() {
    const response = await http.get('/lastest');
    return response;
}

async function getHotMovie() {
    const response = await http.get('/hot');
    return response;  
}

async function getListMovie() {
    const response = await http.get('/');
    return response;  
}

async function getComingsoonMovie(){
    const response=await http.get("/coming-soon");
    return response;
}


export {getLastestMovie,getHotMovie,getListMovie,getComingsoonMovie};
