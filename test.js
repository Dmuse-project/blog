const nextEl= document.querySelector(".next ")
const prevEl= document.querySelector(".prev ")
const imageContainerEl= document.querySelector(".image-container ")
const imgsEl= document.querySelectorAll("img ")

let currentImg= 1
let timeout;

nextEl.addEventListener("click",()=>{
    currentImg--
    updateImg()
    clearTimeout(timeout)
})

prevEl.addEventListener("click",()=>{
    currentImg++
    updateImg()
    clearTimeout(timeout)
})

updateImg()
function updateImg(){
     if(currentImg > imgsEl.length){
        currentImg =1;
     } else if(currentImg < 1){
        currentImg= imgsEl.length
     }

     imageContainerEl.style.transform =`translateX(${(currentImg-5)* 100}vw)`
     timeout=setTimeout(()=>{
        currentImg++
        updateImg()
     }, 3000)
}
