import carousel from './carousel'
import newIn from './newIn';
const body=async()=>{
    return ` 
    ${await carousel()}
    ${await newIn()}
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
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-3 col-lg-2">
                            <img class="img-fluid showtime__img" src="./img/movie-5.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-9 col-lg-10 mt-3 mt-md-0">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>Captain America: The First Avenger</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
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
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-3 col-lg-2">
                            <img class="img-fluid showtime__img" src="./img/movie-6.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-9 col-lg-10 mt-3 mt-md-0">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
                            <p><a href="#">FULL SYNOPSIS <i class="fa fa-angle-right"></i></a></p>
                            <div class="row showtimes__viewing ">
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
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-3 col-lg-2">
                            <img class="img-fluid showtime__img" src="./img/movie-7.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-9 col-lg-10 mt-3 mt-md-0">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
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
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row py-5 tabRow">
                        <div class="col-12 col-md-3 col-lg-2">
                            <img class="img-fluid showtime__img" src="./img/movie-8.jpg" alt="">
                        </div>
                        <div class="col-12 col-md-9 col-lg-10 mt-3 mt-md-0">
                            <p class="showtimes__title">ACTION, ADVENTURE, FANTASY</p>
                            <h3>It's over</h3>
                            <p>European mercenaries searching for black powder become embroiled in the defense of It's over
                                of China
                                against a horde of monstrous creatures.</p>
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
                                    <span>105 MINS</span>
                                    <span>15</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
    <!-- COMING SOON -->
    <section class="comingsoon section">
        <div class="container-md">
            <h2 class="title title--white">Coming Soon</h2>
            <div class="row align-items-center">
                <div class="col-12 col-sm-7 col-md-6 col-lg-6 col-xl-6">
                    <p class="comingsoon__title">
                        COMEDY, CRIME
                    </p>
                    <h3>The Hangover Part III</h3>
                    <div class="comingsoon__rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <span><i class="fa fa-calendar-alt mx-3"></i> 30 Septemper 2020</span>
                    </div>
                    <p>When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down
                        Mr. Chow, who
                        has escaped from prison and is on the run.</p>
                    <a href="#">MORE INFO <i class="fa fa-angle-right"></i></a>
                </div>
                <div class="col-12 col-sm-5 col-md-6 col-lg-6 col-xl-6 mt-3 mt-sm-0">
                    <a href="https://youtu.be/tgB1wUcmbbw" class="venobox" data-vbtype="video">
                        <div class="comingsoon__video">
                            <img class="img-fluid" src="./img/slide-3-video.png" alt="">
                            <i class="fa fa-play"></i>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </section>
    <!-- MOVIE LIST -->
    <section class="movieList section">
        <div class="container">
            <div class="row">
                <div class="col-4 col-lg-2 col-xl-2">
                    <div class="movieList__item">
                        <img class="img-fluid" src="./img/movie-9.jpg" alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>
                <div class="col-4 col-lg-2 col-xl-2">
                    <div class="movieList__item">
                        <img class="img-fluid" src="./img/movie-8.jpg" alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>
                <div class="col-4 col-lg-2 col-xl-2">
                    <div class="movieList__item">
                        <img class="img-fluid" src="./img/movie-11.jpg" alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>
                <div class="col-4 col-lg-2 col-xl-2 mt-3 mt-lg-0">
                    <div class="movieList__item">
                        <img class="img-fluid" src="./img/movie-13.jpg" alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>
                <div class="col-4 col-lg-2 col-xl-2 mt-3 mt-lg-0">
                    <div class="movieList__item">
                        <img class="img-fluid" src="./img/movie-12.jpg" alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>
                <div class="col-4 col-lg-2 col-xl-2 mt-3 mt-lg-0">
                    <div class="movieList__item">
                        <img class="img-fluid" src="./img/movie-14.jpg" alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- CONTACT -->
    <section class="contact section text-center">
        <div class="contact__content">
            <p>Need help? Contact our support team on</p>
            <p><a href="tel:0961051014">096 105 1014</a></p>
        </div>
    </section>`
}

export default body;