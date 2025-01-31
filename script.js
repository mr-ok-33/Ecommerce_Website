const imgs = document.querySelectorAll("#first-slider div img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const scrollContainer = document.querySelectorAll(".products");

let n = 0;

function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none'
        
    }
    imgs[n].style.display = 'block';
}
changeSlide()

prevBtn.addEventListener("click",(e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length-1;
    }
    changeSlide();
})
nextBtn.addEventListener("click",(e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
})
for(item of scrollContainer) {
    item.addEventListener("wheel",(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}




