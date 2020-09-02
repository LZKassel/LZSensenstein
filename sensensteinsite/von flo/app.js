const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons

const prevbtn =document.querySelector('#prevbtn');
const nextbtn =document.querySelector('#nextbtn');

//counter
let counter = 1;
const size = carouselImages[0].clientwidth;

carouselSlide.style.tranform ='translatex(' + (-size * counter ) + 'px)';

// button listeners

nextbtn.addEvenlistener('click',()=>{
if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform o.4 ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translate'(' + (-size * counter ) + 'px)';
});

prevbtn.addEvenlistener('click',()=>{
      if (counter <= 0) return;
    carouselSlide.style.transition = "transform o.4 ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translate'(' + (-size * counter ) + 'px)';
});

carouselSlide.addEvenlistener('transitioned', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
      carouselSlide.style.transition = "none";
      counter = carouselImages.length -2 ;
      carouselSlide.style.transform = 'translate'(' + (-size * counter ) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
      carouselSlide.style.transition = "none";
      counter = carouselImages.length - counter;
      carouselSlide.style.transform = 'translate'(' + (-size * counter ) + 'px)';
});
