import Glide from '@glidejs/glide'
import style from "./styles/main.css";
import './styles/about.scss'
import './styles/appStyles.scss';



  
const testimonials = new Glide('.glide-testimonials',{
    type:"carousel",
    hoverpause: false,
    gap: 20,
    startAt:0,
    perView:2,
    autoplay:false,
    animationDuration: 950,
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
        perView: 1,
        peek: {
            before:0,
            after:0
        }
    },
    
    },
    
})
testimonials.mount()

const slide = document.querySelectorAll('glide__slide img')
slide.forEach((e)=>e.style.opacity=0)

const aboutSection = document.querySelector('.about__chef')
const arrow = document.querySelector('.arrow')
arrow.addEventListener('click',()=>{
    aboutSection.scrollIntoView({behavior:'smooth'})
})




const lightBox = document.querySelector('.img__overlay')
const imgItem = document.querySelector('.img__overlay .gallery__item--img')
const closeLightbox = document.querySelector('.close')
const imageElement = document.querySelectorAll('.gallery__item img')



closeLightbox.addEventListener('click',()=>{
    lightBox.style.opacity= '0'
    lightBox.style.display="none"
})




imageElement.forEach((e)=>{
    e.addEventListener('click',()=>{
        imgItem.attributes.src.nodeValue=e.attributes.src.nodeValue
        lightBox.style.display="block";
        lightBox.style.opacity="1"
        let currentElement = e.classList[1].split('_')[1]
        document.querySelector('body').addEventListener('keydown',(ev)=>{
           if(ev.key==="ArrowLeft"&&currentElement>1){
                currentElement-=1
               imgItem.attributes.src.nodeValue= imgItem.attributes.src.nodeValue.replace(/\d+(?=.jpg)/,currentElement)
           }
            if(ev.key==="ArrowRight"&&currentElement<14){
            currentElement=Number(currentElement)+1
             imgItem.attributes.src.nodeValue= imgItem.attributes.src.nodeValue.replace(/\d+(?=.jpg)/,currentElement)
           } 
        })
        const lightboxControls = document.querySelectorAll('.lightbox__controls')
        lightboxControls.forEach((event)=>{
            event.addEventListener('click',()=>{
                if(event.classList.contains('left')){
                    if(currentElement>1){
                        currentElement-=1
                       imgItem.attributes.src.nodeValue= imgItem.attributes.src.nodeValue.replace(/\d+(?=.jpg)/,currentElement)
                   }
                }
                if(event.classList.contains('right')){
                    if(currentElement<14){
                        currentElement=Number(currentElement)+1
                         imgItem.attributes.src.nodeValue= imgItem.attributes.src.nodeValue.replace(/\d+(?=.jpg)/,currentElement)
                       } 
                }
            })
            
        })
    })
})
if(lightBox.style.display==="block"){
   
}





  
