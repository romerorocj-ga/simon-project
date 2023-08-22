/*----- state variables -----*/
let compSequence= []
let playerSequence= []
let highlight
let win
let intervalId
let playerTurn
let compTurn
let correct
 /*----- cached elements  -----*/
 const topLeft = document.querySelector('.top-left-btn')
 const topRight = document.querySelector('.top-right-btn')
 const bottomLeft = document.querySelector('.bottom-left-btn')
 const bottomRight = document.querySelector('.bottom-right-btn')
 const startGameBtn = document.querySelector('.button')
 /*----- event listeners -----*/

 function startGameOnClick(_evt) {
      play()
    }
startGameBtn.addEventListener('click', startGameOnClick)

function play() {
    win = false
    compSequence = []
    playerSequence = []
    highlight = 0
    intervalId = 0
    playerTurn = 1
    correct= true
    for (let i = 0; i < 10; i++) {
     compSequence.push(Math.floor(Math.random() * 4) + 1)  
    }
    compTurn = true

    intervalId = setInterval(simonTurn, 1000)
}

function simonTurn() {
    if (highlight == playerTurn) {
        clearInterval(intervalId)
        compTurn = false
        clearColor()
    }
    if (compTurn) {
        clearColor()
        setTimeout(() => {
            if (compSequence[highlight] == 1) red()
            if (compSequence[highlight] == 2) blue()
            if (compSequence[highlight] == 3) green()
            if (compSequence[highlight] == 4) yellow()
            highlight++
        }, 500) 
    }
}

function clearColor() {
    topLeft.style.backgroundColor = 'red'
    topRight.style.backgroundColor = 'blue'
    bottomRight.style.backgroundColor = 'green'
    bottomLeft.style.backgroundColor = 'yellow'
}

function red() {
    if(noise) {
        let audio = document.getElementById('audio_red')
        audio.play()
    }
    noise = true
    topLeft.style.backgroundColor = 'pink'
}

function blue() {
    if(noise) {
        let audio = document.getElementById('audio_blue')
        audio.play()
    }
    noise = true
    topRight.style.backgroundColor = 'lightblue'
}

function green() {
    if(noise) {
        let audio = document.getElementById('audio_green')
        audio.play()
    }
    noise = true
    bottomRight.style.backgroundColor = 'light green'
}

function yellow() {
    if(noise) {
        let audio = document.getElementById('audio_yellow')
        audio.play()
    }
    noise = true
    bottomLeft.style.backgroundColor = 'lightyellow'
}


 