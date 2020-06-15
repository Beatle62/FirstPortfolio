//Landing Page slides animation

let sliderImages = document.querySelectorAll(".slide");
let arrowRight = document.querySelector("#arrow-right");
let arrowLeft = document.querySelector("#arrow-left");
let current = 0;


//Clear all images
function reset(){
   for(let i=0; i < sliderImages.length;i++){
     sliderImages[i].style.display = 'none';
   } 
}

//init slider
function startSlide(){
    reset();
    sliderImages[0].style.display ='block';
}

//show prev
function slideLeft(){
  reset();
  sliderImages[current - 1].style.display ='block';
  current--;
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
  if(current === 0){
      current = sliderImages.length;
    }
    slideLeft();
});
//show next

function slideRight(){
    reset();
    sliderImages[current + 1].style.display ='block';
    current++;
}

//Right arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
      current = -1;
    }
    slideRight();
});

startSlide();

//Landing Page typewriting
let i=0;
text ="Start your day with a wakeup call"

function typing(){
  if(i<text.length){
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80);
  } else {
    setTimeout(erase, 80);
  }
 
}
setTimeout(typing,80);

function erase(){
  if(i>=0){
   var temp= text.substring(0, i);
   document.getElementById("text").innerHTML= temp;
   i--;
   setTimeout(erase,80);
  } else{
    setTimeout(typing, 80);
  }
}

//Navbr Toggle animation
const navTriggerEl = document.querySelector(".hamburger");
const menuEl = document.querySelector(".menu");
const hamburgerBarsEl = document.getElementsByTagName("span");


function toggleNav(){
  navTriggerEl.addEventListener("click", function(){
  menuEl.classList.toggle("open");
  animateHamburgers();
  })
}

function animateHamburgers(){
  for(i=0;i<hamburgerBarsEl.length;i++){
    hamburgerBarsEl[i].classList.toggle("change");
  }
}

toggleNav();




