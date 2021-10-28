const menuBtn = document.querySelector('.menu-btn')//main button

const menu = document.querySelector('.menu')//Whole menu

const menuNav = document.querySelector('.menu-nav')//ul menu nav

const menuBranding = document.querySelector('.menu-branding')//menu Image
const navItems = document.querySelectorAll('.nav-item')//all nav items in menu
const body = document.querySelector('body')

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        
        navItems.forEach(navItem=> {
            navItem.classList.add('show')
        });

        showMenu = true
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        
        navItems.forEach(navItem=> {
            navItem.classList.remove('show')
        });

        showMenu = false
    }
}