import style from "./styles/main.css";
import './styles/appStyles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/menu.scss'
import './styles/cocktail.scss'



//toggle nav


const checkbox = document.querySelector('#nav__checkbox')
const hamburger = document.querySelector('.hamburger-container')


checkbox.addEventListener('change', ()=>{
    hamburger.classList.toggle('active')
    document.querySelector('.toggle-nav').classList.toggle('toggle-nav__active')
})




//redirect to homepage on clicking logo
let brandAnchor = document.querySelector('.brand')
brandAnchor.addEventListener('click', ()=>{window.location.assign('/')})
AOS.init({
    startEvent: 'DOMContentLoaded',
    delay:300,
    duration:1350,
})


//anchor to #about closes the nav


const aboutNavLink = document.querySelector('.about-el')
const galleryNavLink = document.querySelector('.gallery-el')
aboutNavLink.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    document.querySelector('.toggle-nav').classList.remove('toggle-nav__active')
})
galleryNavLink.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    document.querySelector('.toggle-nav').classList.remove('toggle-nav__active')
})
const reserveNavEl = document.querySelector('.nav__reserve')
const navbar = document.querySelector('.nav')
let last_known_scroll_position = 0;
let ticking = false
const transformNavbar = (scroll) => {
    if(scroll>100){
        navbar.classList.add('nav__scroll')
    } else {
        navbar.classList.remove('nav__scroll')
    }
}




const sideNavItem = document.querySelectorAll('.side-navbar__item')
let dropDowns = Array.from(sideNavItem);
const starterSection = document.querySelector('#starters')
const activeButton = document.querySelector('.active')

const handleClick = (e) => {
  e.preventDefault();
  dropDowns.forEach(node => {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
  
 
  
}

dropDowns.forEach(node => {
  node.addEventListener('click', handleClick)
  
});

let dropDownPos = []

for(let i=0; i<dropDowns.length;i++){
    dropDownPos.push({navEl:dropDowns[i],position:document.querySelector(dropDowns[i].children[0].hash).offsetTop,element:dropDowns[i]})
    dropDowns[i].addEventListener('click',()=>{
         if(dropDowns[i].classList.contains('active')){
            let current = document.querySelector(`${dropDowns[i].children[0].hash}`)
            current.scrollIntoView({behavior:'smooth'})
        } 
        
    })
}

const checkPosition = (scroll) =>{
    
    for(let i = 0; i<dropDownPos.length;i++){
        dropDownPos[i].navEl.classList.remove('active')
      /*   if(dropDownPos[i].position<scroll){
            dropDownPos[i].navEl.classList.add('active')
        }  */
       /*  console.log(scroll>dropDownPos[i].position&&scroll<dropDownPos[i+1]) */
       if(scroll+202<dropDownPos[dropDownPos.length-1].position){
        if(dropDownPos[i].position<scroll+202&&scroll<dropDownPos[i+1].position){
            dropDownPos[i].navEl.classList.add("active")
        } 
       } else {
           dropDownPos[dropDownPos.length-1].navEl.classList.add("active")
       }
      
     /*    if(scroll>dropDownPos[i].position&&scroll<dropDownPos[i+1].position&&dropDownPos[i-1].position){
            dropDownPos[i-1].navEl.classList.remove('active')
        } */
           
        
    } 
    
}


window.addEventListener('scroll',()=>{
    last_known_scroll_position = window.scrollY

if(!ticking){
window.requestAnimationFrame(()=>{
    transformNavbar(last_known_scroll_position)
    checkPosition(last_known_scroll_position)
    ticking = false
})
ticking = true
}
})




let emailForm = document.querySelector('.emailform-container')
let cta = document.querySelectorAll('.cta')
let tick = false
cta.forEach((e)=>{
    e.addEventListener('click',()=>{
        window.location.assign('./reserve.html')
        console.log('changing location')
         
    })
    
})

