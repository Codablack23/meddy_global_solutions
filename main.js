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


function main(){
  let initSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  const showMenuBtn = document.querySelector("#show-menu-btn");
  const sideMenuLinks = document.querySelectorAll(".sidemenu-link");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  indicators.forEach((indicator,index)=>{
    indicator.addEventListener('click',()=>{
      initSlide = index
      showSlide(index)
    })
  })
  sideMenuLinks.forEach((link)=>{
    link.addEventListener("click",closeMenu)
  })
  showMenuBtn.addEventListener('click',showMenu)
  closeMenuBtn.addEventListener('click',closeMenu)
  window.addEventListener("load",()=>{
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
  })
}

main()
