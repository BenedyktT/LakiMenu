import style from "./styles/main.css";
import './styles/about.scss'
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
let locationBtn = document.querySelector(`.location__btn`)
let menuBtn = document.querySelector('.menu__btn')
let cocktailBtn = document.querySelector('.cocktails__btn')
if(!window.location.href.includes('/about.html')){
    locationBtn.addEventListener(`click`, ()=>{window.location.href=`/about.html`})
}
let brandAnchor = document.querySelector('.brand')
brandAnchor.addEventListener('click', ()=>{window.location.assign('/')})
AOS.init({
    startEvent: 'DOMContentLoaded',
    delay:300,
    duration:1350,
})

/* let locationAssignCreator = (buttonName, locationAddress) => {
    if(!window.location.href.includes(`${locationAddress}.html`)){
        buttonName.addEventListener('click',()=>{
            window.location.href=`/${locationAddress}.html`
        })
    }
}


 locationAssignCreator(menuBtn,'menu') 
 locationAssignCreator(cocktailBtn,'cocktails')  */
console.log(process.env.DB_HOST);