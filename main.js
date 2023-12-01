import './style.css'

function showSlide(slideIndex){
   const slides = document.querySelectorAll(".slide")
   const indicators = document.querySelectorAll(".indicator")
   slides.forEach((slide,index)=>{
     if(index === slideIndex){
      slide.classList.remove("hidden")
      slide.classList.add("block")
     }else{
      slide.classList.add("hidden")
      slide.classList.remove("block")
     }
   })   
   indicators.forEach((indicator,index)=>{
     if(index === slideIndex){
      indicator.classList.remove("border-2")
      indicator.classList.add("bg-theme")
     }else{
      indicator.classList.remove("bg-theme")
      indicator.classList.add("border-2")
     }
   })
}

const showMenu=()=>{
   const menu = document.querySelector(".sidemenu")
   menu.classList.remove("not-shown")
   menu.classList.add("shown")
}
const closeMenu=()=>{
   const menu = document.querySelector(".sidemenu")
   menu.classList.remove("shown")
   menu.classList.add("not-shown")
}
const toggleScroll=(scrollbtn)=>{
  const scrollHeight = window.scrollY
  const windowHeight = window.innerHeight
  if(scrollHeight >= (windowHeight/2)){
    scrollbtn.classList.remove("hide")
  }else{
    scrollbtn.classList.add("hide")
  }
}
function slideInit(){
  try {
    let initSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator,index)=>{
      indicator.addEventListener('click',()=>{
        initSlide = index
        showSlide(index)
      })
    })
    showSlide(initSlide)
      
    setTimeout(()=>{
      setInterval(()=>{
        if(initSlide < (slides.length -1) ){
          initSlide += 1
        }else{
          initSlide = 0
        }
        showSlide(initSlide)
      },5000)
    },5000)
  } catch (error) {
    console.log(error)
  }
}
function setupSideMenu(){
  try {
    const showMenuBtn = document.querySelector("#show-menu-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");
    showMenuBtn.addEventListener('click',showMenu)
    closeMenuBtn.addEventListener('click',closeMenu)
  } catch (error) {
    console.log(error)
  }
}
function main(){

  const scrollbtn = document.querySelector("#scroll-to-top")
  window.addEventListener("load",()=>{
    toggleScroll(scrollbtn)
    slideInit()
    setupSideMenu()
  })
  window.addEventListener("scroll",()=>toggleScroll(scrollbtn))
}

main()
