import style from "./styles/main.css";
import './styles/appStyles.scss';
import Glide from '@glidejs/glide'

let carousel = new Glide('.glide',{
    type:"carousel",
    hoverpause: true,
    gap: 10,
    startAt:0,
    perView:3,
    autoplay:4000,
    animationDuration: 1500,
    peek: {
        before: 50,
        after: 100
      },
    breakpoints: {
    1630: {
        peek:{
            before:0,
            after:0
        }
    },
    1024: {
        perView: 2
        
    },
    600: {
        perView: 1,
        peek: {
            before:0,
            after:0
        }
    },
    
    },
    
})
/* glide.on('mount.after', function () {
    // Logic fired after mounting
  }) */
carousel.mount()

const slide = document.querySelectorAll('glide__slide img')
slide.forEach((e)=>e.style.opacity=0)
const checkBox = document.querySelector('#toggle-nav__checkbox')
let hamburger = document.querySelector('.hamburger-container')
hamburger.addEventListener('click', ()=>{
    if(checkBox.checked){hamburger.classList.add('active')} else {
        hamburger.classList.remove('active')
    }
})



