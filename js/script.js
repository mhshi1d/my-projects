// pure js
const navbar = document.querySelector('.navbar')

const toTopElm = document.querySelector('.to-top')

toTopElm.addEventListener('click',function () {
document.documentElement.scrollTop = 0
})

function setNavbarBg() {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-secondary')
        toTopElm.classList.remove('d-none')
    }
    else {
        toTopElm.classList.add('d-none')
        navbar.classList.remove('bg-secondary')
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setNavbarBg()
    window.addEventListener('scroll', setNavbarBg)
})
