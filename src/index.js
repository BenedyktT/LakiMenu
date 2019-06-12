import style from "./styles/main.css";
import './styles/appStyles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/menu.scss'


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
aboutNavLink.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    document.querySelector('.toggle-nav').classList.remove('toggle-nav__active')
})

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
window.addEventListener('scroll',()=>{
        last_known_scroll_position = window.scrollY
    


if(!ticking){
    window.requestAnimationFrame(()=>{
        transformNavbar(last_known_scroll_position)
        ticking = false
        
    })
    ticking = true
}
})


const sideNavItem = document.querySelectorAll('.side-navbar__item')
let dropDowns = Array.from(sideNavItem);

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