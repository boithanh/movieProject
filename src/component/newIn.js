import { getLastestMovie } from "./connect";

const newIn= async()=>{
let arrMovie=[];

try{
const movies=await getLastestMovie();
// console.log(movies);
arrMovie=movies.data;

}catch(err){
console.log(err);
}

function randomStar(rating){
    switch (true){
        case rating>=1 && rating<2:return `<i class="fa fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=2 && rating<3:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=3 && rating<4:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=4 && rating<5:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=5:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`;
        default:return `<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`
    }
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