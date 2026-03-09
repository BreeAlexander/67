clickbox = document.querySelector('.click')
spinbox = document.querySelector('.spin')
movebox = document.querySelector('.move')
hoverBox = document.querySelector('.hover')
dblclickbox = document.querySelector('.dblclick')


colors = ['blue', 'green', 'purple', 'orange', 'red', 'pink', 'brown', 'black']
index = 0
clickbox.addEventListener('click', () => {
    clickbox.style.background = colors[index]
    index = index + 1
    if (index == colors.length)
    {
        index = 0
    }
    clickbox.style.color = 'white'
})

spinbox.addEventListener('click', () => {
    spinbox.classList.toggle('start')
})

x = 0
y = 0

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowRight') {x = x + 10}
    if (event.key == 'ArrowUp') {y = y - 10}
    if (event.key == 'ArrowLeft') {x = x - 10}
    if (event.key == 'ArrowDown') {y = y + 10}
    movebox.style.transform = `translate(${x}px, ${y}px)`
})

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.height = "200px"
    hoverBox.style.width = "300px"
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.height = "60px"
    hoverBox.style.width = "250px"
})



dblclickbox.addEventListener('dblclick', () => {
    dblclickbox.classList.toggle('active')

})
