
const accordionItemsEl = document.getElementsByClassName("accordion__item");

function accordion(){
    for(let i=0; i<accordionItemsEl.length;i++){
        let accHeader = accordionItemsEl[i].firstElementChild;
        accHeader.addEventListener("click", function(){
            let accDetails = this.nextElementSibling;
            if(accDetails.style.maxHeight){
                accDetails.style.maxHeight= null;
                this.lastElementChild.innerHTML = "+";
            }else{
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                this.lastElementChild.innerHTML = "-";
            }
        })
    }
}

accordion();
