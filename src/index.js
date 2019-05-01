import style from "./styles/main.css";
import './styles/appStyles.scss';



let hamburger = document.querySelector('.hamburger-container')
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
})
