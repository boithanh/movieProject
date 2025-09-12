export function randomStar(rating){
    switch (true){
        case rating>=1 && rating<2:return `<i class="fa fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=2 && rating<3:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=3 && rating<4:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=4 && rating<5:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa-regular fa-star"></i>`;
        case rating>=5:return `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`;
        default:return `<i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>`
    }
}