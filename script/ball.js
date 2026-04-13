const ball = document.createElement('div')
document.body.appendChild(ball)
const Lpadel = document.createElement('div')
document.body.appendChild(Lpadel)
let LpadelWidth = 20
let LpadelHeight = 100
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let LpadelSpeed = 10
let LpadelYPosition = windowHeight / 2 - LpadelHeight / 2

const ballRadius = 30
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 5
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
        (balltop <= Lpadelbottom) &&
        (ballleft <= LpadelRight) &&
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

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        if (LpadelYPosition < 0) {
            LpadelYPosition = 0
        }
        else {
            LpadelYPosition = LpadelYPosition - LpadelSpeed
        }
    }
    if (event.key == 's') {
        if (LpadelYPosition >= windowHeight - LpadelHeight) {
            LpadelYPosition = windowHeight - LpadelHeight
        }
        else {
            LpadelYPosition = LpadelYPosition + LpadelSpeed
        }
    }
    Lpadel.style.top = `${LpadelYPosition}px`
})
