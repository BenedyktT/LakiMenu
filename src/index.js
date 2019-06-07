import style from "./styles/main.css";
import './styles/appStyles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
const aboutSection = document.querySelector('.about__chef')
const arrow = document.querySelector('.arrow')
arrow.addEventListener('click',()=>{
    aboutSection.scrollIntoView({behavior:'smooth'})
})

//anchor to #about closes the nav


const aboutNavLink = document.querySelector('.about-el')
aboutNavLink.addEventListener('click',()=>{
    hamburger.classList.remove('active')
    document.querySelector('.toggle-nav').classList.remove('toggle-nav__active')
})