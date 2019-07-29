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



const dateElement = document.querySelector('.date')

let date = new Date().toISOString()

let now = ()=>{
    dateElement.value=date.slice(0,16)
    dateElement.style.color=""
}
now()
let error = document.createElement('p')
const showWarning= ()=>{
    let form = document.querySelector('.emailform__elements')
        
        error.classList.add('errorMsg')
        error.textContent='Restaurant is open 12-22, Last reservation is available til 21.30'
        dateElement.style.border="2px solid red"
        form.appendChild(error)
}
const submit = document.querySelector('.emailform__submit')
submit.addEventListener('click',()=>{
    let inputDate = dateElement.value.split("T")
    let inputHour =inputDate[1].split(":")[0]
    let inputMinute = inputDate[1].split(":")[1]
    if(inputHour>=12&&((inputHour<21)||(inputHour<22&&inputMinute<30))){
       dateElement.style.border="none" 
    } else {
        error.textContent=""
        showWarning()
    }
})

let emailForm = document.querySelector('.emailform-container')
let cta = document.querySelectorAll('.cta')
let tick = false
cta.forEach((e)=>{
    e.addEventListener('click',()=>{
        if(!tick){
            emailForm.classList.add('active')
            e.classList.add('active')
            e.innerHTML='cancel'
            tick = true
        } else {
            emailForm.classList.remove('active')
            e.classList.remove('active')
            e.innerHTML="Reservation";
            tick=false

        }
    })
    
})

//////////////

//email handler

let form = document.querySelector(".emailform__form");
const formel = document.querySelector('.form-send')
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.getAttribute('action'), {
    method: 'POST',
    headers: {
      'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: new URLSearchParams(formData).toString()
  })
  .then(res => {
    if (res) {
        document.querySelector('.form-send').style.display="block"
    setTimeout(() => {
                formel.textContent="Redirecting to home page"
            }, 5000);
    setTimeout(() => {
                document.querySelector('.form-send').style.display="none"
                document.location.href="/";
            }, 5000);
        }
  });
});
