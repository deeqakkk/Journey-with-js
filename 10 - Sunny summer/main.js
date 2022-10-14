const menuBtn = document.querySelector('.menu-burger');
const nav= document.querySelector('.nav-links');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.add('active-links');
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove('active-links');
    }
})
