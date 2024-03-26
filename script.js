let menu= document.querySelector('#menu');
let header= document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

menu.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

//smoth scrolling
$('a[href*="#"]').on('click')