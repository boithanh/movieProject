import { getListMovie } from "./connect";

const showtime=async()=>{
let arrMovie=[];

try{
const movies=await getListMovie();
// console.log(movies);
arrMovie=movies.data;

}catch(err){
console.log(err);
}

function randomAge(){
    const age=Math.floor(Math.random()*4)+1;
    switch (true){
        case age===1: return 13;
        case age===2:return 15;
        case age===3:return 18;
        default:return "";
    }
}

return `
 <!-- SHOWTIMES -->
    <section class="showtimes section">
        <div class="container-md">
            <ul class="nav nav-tabs flex-column flex-sm-row" id="myTab" role="tablist">
                <li class="nav-item " role="presentation">
                    <a class="nav-link line active" id="home-tab" data-toggle="tab" href="#mon" role="tab"
                        aria-controls="home" aria-selected="true"><span>MON</span> </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link line" id="profile-tab" data-toggle="tab" href="#tue" role="tab"
                        aria-controls="profile" aria-selected="false"><span>TUE</span> </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link line" id="contact-tab" data-toggle="tab" href="#today" role="tab"
                        aria-controls="contact" aria-selected="false"><span>TODAY</span> </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link line" id="contact-tab" data-toggle="tab" href="#thu" role="tab"
                        aria-controls="contact" aria-selected="false"><span>THU</span> </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link line" id="contact-tab" data-toggle="tab" href="#fri" role="tab"
                        aria-controls="contact" aria-selected="false"><span>FRI</span> </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link line" id="contact-tab" data-toggle="tab" href="#sat" role="tab"
                        aria-controls="contact" aria-selected="false"><span>SAT</span> </a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link line" id="contact-tab" data-toggle="tab" href="#sun" role="tab"
                        aria-controls="contact" aria-selected="false"><span>SUN</span> </a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="mon" role="tabpanel" aria-labelledby="home-tab">
                    
                       ${
                        arrMovie.map((item)=>{
                             const {poster,genres,title,plot,runtime}=item;
                             return `<div class="row py-5 tabRow">
                             <div class="col-12 col-md-3 col-lg-2">
                            <img class="img-fluid showtime__img" src=${poster} alt="">
                        </div>
                        <div class="col-12 col-md-9 col-lg-10 mt-3 mt-md-0">
                            <p class="showtimes__title text-uppercase">${genres.join(", ")}</p>
                            <h3>${title}</h3>
                            <p>${plot}</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9 d-lg-flex align-items-center">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <div>
                                        <button type="button" class="btn" disabled>10:30</button>
                                        <button type="button" class="btn">12:30</button>
                                        <button type="button" class="btn">14:30</button>
                                        <button type="button" class="btn">16:30</button>
                                    </div>                                   
                                </div>
                                <div class="col-12 col-md-3 mt-3 mt-md-0 text-md-right showtimes__runingTime">
                                    <span>${runtime} MINS</span>
                                    <span>${randomAge()}</span>
                                </div>
                            </div>
                        </div>
                    </div>`
                        })
                       }
                    
                </div>
                <div class="tab-pane fade" id="tue" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-10">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <button type="button" class="btn" disabled>10:30</button>
                                    <button type="button" class="btn">12:30</button>
                                    <button type="button" class="btn">14:30</button>
                                    <button type="button" class="btn">16:30</button>
                                </div>
                                <div class="col-12 col-md-3 text-md-right showtimes__runingTime">
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="today" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-10">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <button type="button" class="btn" disabled>10:30</button>
                                    <button type="button" class="btn">12:30</button>
                                    <button type="button" class="btn">14:30</button>
                                    <button type="button" class="btn">16:30</button>
                                </div>
                                <div class="col-12 col-md-3 text-md-right showtimes__runingTime">
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="thu" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-10">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <button type="button" class="btn" disabled>10:30</button>
                                    <button type="button" class="btn">12:30</button>
                                    <button type="button" class="btn">14:30</button>
                                    <button type="button" class="btn">16:30</button>
                                </div>
                                <div class="col-12 col-md-3 text-md-right showtimes__runingTime">
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="fri" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-10">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <button type="button" class="btn" disabled>10:30</button>
                                    <button type="button" class="btn">12:30</button>
                                    <button type="button" class="btn">14:30</button>
                                    <button type="button" class="btn">16:30</button>
                                </div>
                                <div class="col-12 col-md-3 text-md-right showtimes__runingTime">
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="sat" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-10">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <button type="button" class="btn" disabled>10:30</button>
                                    <button type="button" class="btn">12:30</button>
                                    <button type="button" class="btn">14:30</button>
                                    <button type="button" class="btn">16:30</button>
                                </div>
                                <div class="col-12 col-md-3 text-md-right showtimes__runingTime">
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="sun" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-10">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing align-items-center">
                                <div class="col-12 col-md-9">
                                    <i class="fa fa-clock"></i>
                                    <span>VIEWING TIMES </span>
                                    <button type="button" class="btn" disabled>10:30</button>
                                    <button type="button" class="btn">12:30</button>
                                    <button type="button" class="btn">14:30</button>
                                    <button type="button" class="btn">16:30</button>
                                </div>
                                <div class="col-12 col-md-3 text-md-right showtimes__runingTime">
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
`
}
export default showtime;