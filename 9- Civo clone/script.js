const menuBtn = document.querySelector('.ham');
const nav= document.querySelector('.links');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if(!menuOpen){
        menuOpen = true;
        nav.classList.add('active');
    }
    else{
        menuOpen = false;
        nav.classList.remove('active');
    }
})