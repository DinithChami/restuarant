let menu = document.querySelector('.menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-circle-xmark');
    navbar.classList.toggle('active'); 
};
