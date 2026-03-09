clickbox = document.querySelector('.click')
spinbox = document.querySelector('.spin')
movebox = document.querySelector('.move')
hoverbox = document.querySelector('.hover')
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
