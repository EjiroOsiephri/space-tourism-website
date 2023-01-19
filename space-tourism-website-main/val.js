const btnTwo = document.getElementById('btn2');
const btnThree = document.getElementById('btn3');
const btnFour = document.getElementById('btn4');
const btnFive = document.getElementById('btn5');
const homeOne = document.querySelector('.home1');
const home = document.querySelector('.home');
const homeTwo = document.querySelector('.home2');
const homeThree = document.querySelector('.home3');


btnFour.addEventListener("click",()=>{
    homeThree.style.marginTop = "-930px";
})

btnThree.addEventListener("click",()=>{
    homeTwo.style.marginTop = "-930px";
    
})



btnTwo.addEventListener("click",()=>{
    homeOne.style.marginTop = "-980px";
   
})