import { getLastestMovie } from "./connect";
import { randomStar } from "./randomStar";

const newIn= async()=>{
let arrMovie=[];

try{
const movies=await getLastestMovie();
// console.log(movies);
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
                            const {poster,genres,title,plot,imdb,tomatoes}=item;
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
                            ${randomStar(tomatoes.viewer.rating)}
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