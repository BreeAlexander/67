nav = document.querySelector('.titles')

window.addEventListener('scroll', () => {
    if(scrollY > 520) {
        nav.classList.add('active')
    }
    else {
        nav.classList.remove('active')
    }
})
