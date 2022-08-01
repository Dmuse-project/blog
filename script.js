const menuEl=document.querySelector(".menu-icon")
const containerEl=document.querySelector(".container")
const navEl=document.querySelector(".navbar")
const closeIconEl=document.querySelector(".close-icon")
const contentEl=document.querySelector(".content")
const topContainerEl=document.querySelector(".top-container")
const textEl=document.querySelector(".text")

console.log(menuEl)
console.log(contentEl)
console.log(containerEl)

menuEl.addEventListener("click",()=>{
let act=document.createElement("div")
    navEl.classList.add("active")
    menuEl.classList.add("active")
    closeIconEl.classList.add("active")
    menuEl.appendChild(act)

})
closeIconEl.addEventListener("click",()=>{
let div=document.createElement("div")
    navEl.classList.remove("active")
    closeIconEl.classList.remove("active")
    menuEl.classList.remove("active")
    closeIconEl.appendChild(div)

})

console.log(containerEl.offsetHeight)
console.log(contentEl.offsetTop)
window.addEventListener("scroll",()=>{
    // console.log(window.scrollY)
    
    if(window.scrollY > contentEl.offsetTop-containerEl.offsetHeight){
        show()
    }else{
        remove()
    
    }
   
    
    
})

function show(){

    let displays=document.createElement("div")
    containerEl.classList.add("display")
    navEl.classList.add("display")
    menuEl.classList.add("display")
    closeIconEl.classList.add("display")
    closeIconEl.appendChild(displays)
    
    
}

function remove(){

    let displays=document.createElement("div")
    containerEl.classList.remove("display")
    navEl.classList.remove("display")
    menuEl.classList.remove("display")
    closeIconEl.classList.remove("display")
    closeIconEl.appendChild(displays)
    
    
}
