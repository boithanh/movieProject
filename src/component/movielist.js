import { getListMovie2 } from "./connect";

const movielist=async()=>{
    let arrMovie=[];
     try{
const movies= await getListMovie2();
arrMovie=movies.data;
    }catch(err){
console.log(err);
    }
    return `
     <!-- MOVIE LIST -->
    <section class="movieList section">
        <div class="container">
            <div class="row">
                ${
                    arrMovie.map((item)=>{
                        return (
                            `<div class="col-4 col-lg-2 col-xl-2 mt-3 mt-lg-0">
                    <div class="movieList__item">
                        <img class="img-fluid" src=${item?.poster} alt="">
                        <div class="movieList__overlay"></div>
                    </div>
                </div>`
                        )
                    })
                }
            </div>
        </div>
    </section>
    <!-- CONTACT -->
    <section class="contact section text-center">
        <div class="contact__content">
            <p>Need help? Contact our support team on</p>
            <p><a href="tel:0961051014">078 6010 285</a></p>
        </div>
    </section>
    `
}
export default movielist;