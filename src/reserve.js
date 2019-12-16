/*  const dateElement = document.querySelector('.date')
 const timeElement = document.querySelector('.time')

const date = new Date()
let now = ()=>{
    let currentMonth = date.getMonth()
    if (currentMonth < 10) { currentMonth = '0' + currentMonth; }
    dateElement.value =`${date.getFullYear()}-${currentMonth}-${date.getDate()}`
    console.log()
}
now()
let error = document.createElement('p')
const showWarning= ()=>{
    let form = document.querySelector('.emailform__elements')  
        error.classList.add('errorMsg')
        error.textContent='Restaurant is open 12-22, Last reservation is available til 21.30'
        errorTick=true
        timeElement.style.border="2px solid red"
        form.appendChild(error)
        error.textContent=""     
}


const submit = document.querySelector('.emailform__submit')
submit.addEventListener('click',(e)=>{
    let inputHour =timeElement.value.split(':')[0]
    let inputMinute = timeElement.value.split(':')[1]
    if(inputHour>=12&&((inputHour<21)||(inputHour<22&&inputMinute<30))){
       dateElement.style.border="none"
    } else {
        error.textContent=""
        showWarning()
        

    }
}) 

let hiddenInput = document.querySelector(".hidden-input")
const selectGuests = document.querySelector(".select-guests")
const formElement = document.querySelector(".emailform__form")

const inputHandle = ()=>{
  hiddenInput.value = selectGuests.value

}

formElement.addEventListener("click",inputHandle)
const minDate = () => {
  const day = date.getDate();
  let monthIndex = date.getMonth() +1;
  const year = date.getFullYear();
  if(monthIndex<10){
    monthIndex = '0' + monthIndex
  }
  return `${year}-${monthIndex}-${day}`
}
const dateInputElement = document.querySelector('.date-element')
dateInputElement.setAttribute("min",minDate())


//////////////

//email handler

/*  let form = document.querySelector(".emailform__form");
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
        formel.style.display="block"
        console.log('display block')
    setTimeout(() => {
                formel.textContent="Redirecting to home page"
                console.log('redirecting')
            }, 5000);
    setTimeout(() => {
                formel.style.display="none"
                console.log('display none')
                document.location.href="/";
            }, 5000);
        }
  });
}); 
 */
