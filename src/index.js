import style from "./styles/main.css";
import './styles/appStyles.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const checkBox = document.querySelector('#toggle-nav__checkbox')
const toggleNav = document.querySelector('.toggle-nav')
const toggleNavEl = document.querySelector('.toggle-nav__elements')
let hamburger = document.querySelector('.hamburger-container')
hamburger.addEventListener('click', ()=>{
    if(checkBox.checked){hamburger.classList.add('active')} else {
        hamburger.classList.remove('active')
    }
})
    checkBox.addEventListener('click',()=>{
        toggleNav.classList.add('toggle-nav__active')
        
        
    })
    if(toggleNav.classList.includes)
    body.addEventListener('click',()=>{toggleNav.classList.toggle('toggle-nav_active')})

let brandAnchor = document.querySelector('.brand')
brandAnchor.addEventListener('click', ()=>{window.location.assign('/')})
AOS.init({
    startEvent: 'DOMContentLoaded',
    delay:300,
    duration:1350,
})

