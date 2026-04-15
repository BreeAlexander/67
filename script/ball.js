const ball = document.createElement('div')
document.body.appendChild(ball)
const Lpadel = document.createElement('div')
document.body.appendChild(Lpadel)
const Rpadel = document.createElement('div')
document.body.appendChild(Rpadel)
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let LpadelWidth = 20
let LpadelHeight = 100
let LpadelSpeed = 20
let LpadelYPosition = windowHeight / 2 - LpadelHeight / 2
let LpadelXPosition = 70

const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 4
let ballXDirection = 1
let ballYDirection = 1


setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LpadelTop = LpadelYPosition
    let LpadelBottom = LpadelYPosition + LpadelHeight
    let LpadelRight = LpadelXPosition + LpadelWidth





    if(
        (ballBottom >= LpadelTop) &&
        (ballTop <= LpadelBottom) &&
        (ballLeft <= LpadelRight) &&
        (ballXDirection == -1)
    ) {
            ballXDirection = ballXDirection * -1
        }
}

createBall()

function createBall(){
    document.body.appendChild(ball)
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "black"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

createLpadel()
function createLpadel() {
    Lpadel.style.height = `${LpadelHeight}px`
    Lpadel.style.width = `${LpadelWidth}px`
    Lpadel.style.backgroundColor = 'blue'
    Lpadel.style.position = 'absolute'
    Lpadel.style.left = "50px"
    Lpadel.style.top = `${LpadelYPosition}px`
}

wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLpadel() {
    if (wKey == true && LpadelYPosition > 0) {
        LpadelYPosition = LpadelYPosition - LpadelSpeed
    }
    if (sKey == true && LpadelYPosition < windowHeight - LpadelHeight) {
        LpadelYPosition = LpadelYPosition + LpadelSpeed
    }
    Lpadel.style.top = `${LpadelYPosition}px`
}

function animate() {
    moveBall()
    moveLpadel()
    requestAnimationFrame(animate)
}
animate()



// right side ____

let RpadelWidth = 20
let RpadelHeight = 100
let RpadelSpeed = 20
let RpadelYPosition = windowHeight / 2 - RpadelHeight / 2
let RpadelXPosition = 70

createRpadel()
function createRpadel() {
    Rpadel.style.height = `${RpadelHeight}px`
    Rpadel.style.width = `${RpadelWidth}px`
    Rpadel.style.backgroundColor = 'blue'
    Rpadel.style.position = 'absolute'
    Rpadel.style.right = "50px"
    Rpadel.style.top = `${RpadelYPosition}px`
}

up = false
down = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'upArrow') {
        up = true
    }
    if (event.key == 'downArrow') {
        down = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'upArrow') {
        up = false
    }
    if (event.key == 'downArrow') {
        down = false
    }
})

function moveRpadel() {
    if (up == true && RpadelYPosition > 0) {
        RpadelYPosition = RpadelYPosition - RpadelSpeed
    }
    if (down == true && RpadelYPosition < windowHeight - RpadelHeight) {
        RpadelYPosition = RpadelYPosition + RpadelSpeed
    }
    Rpadel.style.top = `${RpadelYPosition}px`
}


