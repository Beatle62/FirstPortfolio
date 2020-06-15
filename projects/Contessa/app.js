//main page center image animation
var i = 0;
var images= ["images/image1@2x.png","images/image2@2x.png","images/image3@2x.png","images/image4@2x.png","images/image5@2x.png","images/image6@2x.png"];
var time = 1000;

function changeImg(){
    document.slide.src = images[i];

    if(i<images.length-1){
        i++;
    } else{
        i = 0;
    }
    setTimeout("changeImg()", time);

}

window.onload = changeImg;

//Items list toggle animation
const hamburgerEl = document.getElementById("hamburger");
const itemListEl  = document.querySelector(".items__list");
const hamburgerBarsEl = document.getElementsByTagName("span");


function hamburgerToggle(){
    hamburgerEl.addEventListener("click", function(){
    itemListEl.classList.toggle("open");
    animateHamburgers();
    })
}


function animateHamburgers(){
    for(i=0;i<hamburgerBarsEl.length;i++){
        hamburgerBarsEl[i].classList.toggle("change");
    }
}

hamburgerToggle();









