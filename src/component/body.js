import carousel from './carousel'
import comingsoon from './comingsoon';
import movielist from './movielist';
import newIn from './newIn';
import showtime from './showtime';
const body=async()=>{
    return ` 
    ${await carousel()}
    ${await newIn()}
    ${await showtime()}
    ${await comingsoon()}
    ${await movielist()}
   `
}

export default body;