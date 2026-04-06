button = document.querySelector('.btn')
body = document.querySelector('body')
digg = document.querySelector('.digg')
content = document.querySelector('.content')
nav = document.querySelector('.nav')




button.addEventListener('click', () => {
    body.classList.toggle('light')
    digg.classList.toggle('light')
    button.classList.toggle('light')
    content.classList.toggle('light')
    nav.classList.toggle('light')
})
