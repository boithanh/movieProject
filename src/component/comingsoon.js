import { getComingsoonMovie } from "./connect";

const comingsoon=async()=>{
       let arrMovie;
    try{
const movies= await getComingsoonMovie();
console.log(movies);

arrMovie=movies.data;
    }catch(err){
console.log(err);

    }
    return `
      <!-- COMING SOON -->
    <section class="comingsoon section">
        <div class="container-md">
            <h2 class="title title--white">Coming Soon</h2>
            <div class="row align-items-center">
                <div class="col-12 col-sm-7 col-md-6 col-lg-6 col-xl-6">
                    <p class="comingsoon__title text-uppercase">
                      
                    </p>
                    <h3>${arrMovie?.title}</h3>
                    <div class="comingsoon__rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <span><i class="fa fa-calendar-alt mx-3"></i> 30 Septemper 2020</span>
                    </div>
                    <p>${arrMovie?.plot}</p>
                    <a href="#">MORE INFO <i class="fa fa-angle-right"></i></a>
                </div>
                <div class="col-12 col-sm-5 col-md-6 col-lg-6 col-xl-6 mt-3 mt-sm-0">
                    <a href="https://youtu.be/LRWOm1CKGFY?si=6-sm4gDr2ERVCu4k" class="venobox" data-vbtype="video">
                        <div class="comingsoon__video">
                            <img class="img-fluid" src=${arrMovie?.backdrop} alt="">
                            <i class="fa fa-play"></i>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </section>
    `
}
export default comingsoon;