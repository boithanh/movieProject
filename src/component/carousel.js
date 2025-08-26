import { getHotMovie, getMovie } from "./connect";

const carousel = async() => {
    let arrMovie=[];

try{
const movies=await getHotMovie();
console.log(movies);
arrMovie=movies.data;

}catch(err){
console.log(err);
}

    return `
<!-- CAROUSEL -->
    <section class="movieCarousel">
        <!-- data-ride="carousel" -->
        <div id="MovieCarousel" class="carousel slide carousel-fade" >
            <ol class="carousel-indicators container">
                ${
                    arrMovie.map((_,index)=>{
                        return `
                        <li data-target="#MovieCarousel" data-slide-to=${index} class=${index===0?"active":""}></li>
                        `
                    }).join("")
                }
            </ol>
            <div class="carousel-inner">
            ${
                arrMovie.map((item,index)=>{
                    const {poster,genres,title,plot}=item;
                    return `<div class="carousel-item ${index===0?"active":""}">
                    <div class="d-flex justify-content-center align-items-center w-100 h-100 z-2">
                   <img src=${poster} class="carousel-img">
                    </div>
                    <div class="carouse-item__overlay"></div>
                    <div class="container-md carousel-caption">
                        <div class="col-12 col-lg-9 p-0">
                            <p class="animate__animated animate__fadeInDown text-uppercase">${genres.join(", ")}</p>
                            <h2 class="animate__animated animate__fadeInDown">${title}</h2>
                            <p class="animate__animated animate__fadeInUp">${plot}</p>
                            <div class="carousel__trailer animate__animated animate__fadeInUp">
                                <span class="carousel__age">PG</span>
                                <button class="btn">
                                    <i class="fa fa-play"></i>
                                    <span>PLAY TRAILER</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`
                }).join("")
            }
            </div>
            <img class="carousel__scroll" src="./img/scroll-arrow.svg" alt=""> 
           <a class="carousel-control-prev" href="#MovieCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#MovieCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a> 
        </div>
    </section>
    
`
}


export default carousel;