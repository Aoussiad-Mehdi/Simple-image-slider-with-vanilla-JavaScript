const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.querySelector('.container .carousel');

let size = 1;
let index = 0;

nextBtn.addEventListener('click', ()=>{
    if(index === 2){
        carousel.style.transform = 'translateX(' + 0 + 'px)';
        carousel.style.transition = 'none';
        index = 0;
        size = 1;
        return;
    }
    else if(index === 1){
        carousel.style.transform = 'translateX(' + -1100 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 2;
        size = 2;
        return;
    }
    else{
        carousel.style.transform = 'translateX(' + -550 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 1;
        size = 1;
        return;
    }
});

prevBtn.addEventListener('click', ()=>{
    if(index === 0){
        carousel.style.transform = 'translateX(' + -1100 + 'px)';
        carousel.style.transition = 'none';
        index = 2;
        size = 1;
        return;
    }
    else if(index === 1){
        carousel.style.transform = 'translateX(' + (0) + 'px)';
        carousel.style.transition = '.3s ease';
        index = 0;
        size = 1;
        return;
    }
    else{
        carousel.style.transform = 'translateX(' + (-550) + 'px)';
        carousel.style.transition = '.3s ease';
        index = 1;
        size = 2;
        return;
    }

});



