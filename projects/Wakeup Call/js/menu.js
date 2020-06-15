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