import Glide from '@glidejs/glide'
import style from "./styles/main.css";
import './styles/about.scss'
import './styles/appStyles.scss';

let carousel = new Glide('.glide',{
    type:"carousel",
    hoverpause: false,
    gap: 10,
    startAt:0,
    perView:3,
    autoplay:2000,
    animationDuration: 1350,
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