import { getMovie } from "./connect";

const newIn= async()=>{
let arrMovie=[];

try{
const movies=await getMovie();
console.log(movies);
arrMovie=movies.data;

}catch(err){
console.log(err);
}
    return`
    <!-- NEW IN -->
    <section class="newIn section">
        <div class="container">
            <h2 class="title">New In</h2>
            <div class="newIN__content">
                <div class="row">
                    ${
                          arrMovie.map((item,index)=>{
                            const {poster,genres,title,plot,imdb}=item;
                            return `
                             <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <div class="newIn__img">
                            <img class="img-fluid" src=${poster} alt="">
                            <div class="newIn__overlay"></div>
                            <div class="newIn__play">
                                <div>
                                    <a href="#"><i class="fa fa-play"></i></a>
                                    <a href="#">read more</a>
                                    <p class="date">Released: 7 Mar, 2017</p>
                                </div>
                            </div>
                        </div>
                        <div class="newIn__title">
                            <h3>${title}</h3>
                            <p>
                            ${
                                (imdb.votes<=500 && imdb.votes >=1000)?`<i class="fa fa-star"></i>` ?
                                 (imdb.votes<=1000 &&imdb.votes >=1300): `<i class="fa fa-star"></i><i class="fa fa-star"></i>`?
                                  (imdb.votes<=1300 &&imdb.votes >=1600): `<i class="fa fa-star"></i><i class="fa fa-star"></i>`:`<i class="fa fa-star"></i><i class="fa fa-star"></i>`
                            }
                            
                            </p>
                        </div>
                    </div>
                            `
                          }).join("")
                    }

                </div>
            </div>
        </div>
    </section>
    `;
}
export default newIn;