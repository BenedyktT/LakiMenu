import style from "./styles/main.css";
import './styles/about.scss'
import './styles/appStyles.scss';

const checkBox = document.querySelector('#toggle-nav__checkbox')
let hamburger = document.querySelector('.hamburger-container')
hamburger.addEventListener('click', ()=>{
    if(checkBox.checked){hamburger.classList.add('active')} else {
        hamburger.classList.remove('active')
    }
})

let locationBtn = document.querySelector(`.location__btn`)
if(!window.location.href.includes('/about.html')){
    locationBtn.addEventListener(`click`, ()=>{window.location.href=`/about.html`})
}
let brandAnchor = document.querySelector('.brand')
brandAnchor.addEventListener('click', ()=>{window.location.assign('/')})

