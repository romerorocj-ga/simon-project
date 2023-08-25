let moves
let totalMoves
let currentLevel = 1
const audioElements = {
    '1': document.getElementById('audio_yellow'),
    '2': document.getElementById('audio_red'),
    '3': document.getElementById('audio_blue'),
    '4': document.getElementById('audio_green')
}

function highlight(panelPos, time) {
    const panel = document.querySelector(`.color-panels[pos="${panelPos}"]`)

    setTimeout(() => {
        panel.classList.add('active')
        playAudio(panelPos)
        setTimeout(() => {
            panel.classList.remove('active')
        }, 300)
    }, time)
}
function playAudio(panelPos) {
    const audio = audioElements[panelPos]
    if (audio) {
        audio.currentTime = 0
        audio.play()
    }
}

function sequenceMoves() {
    for (let i = 0; i < totalMoves; i++) {
        moves.push(Math.floor(Math.random() * 4) + 1)
    }
}

function startGame() {
    moves = []
    totalMoves = 2
    const startButton = document.querySelector('#start-button')
    const gameMessage = document.querySelector('#game-message')
    startButton.style.display = 'none'
    gameMessage.style.display = 'block'
    sequence();
}

function sequence() {
    moves = []
    sequenceMoves(1)

    const gameMessage = document.querySelector('#game-message')
    gameMessage.innerHTML = 'Simon Says'

    moves.forEach((move, i) => {
        highlight(move, 600 * i)
    });

    setTimeout(() => {
        gameMessage.innerHTML = 'Repeat The Sequence'
    }, 600 * moves.length)
}

function panelClick(e) {
    const panelPos = e.target.getAttribute('pos')
    highlight(panelPos, 0)

    if (moves.length > 0 && parseInt(moves[0]) === parseInt(panelPos)) {
        moves.shift()

        if (moves.length === 0) {
            if (totalMoves > 3) {
                win()
            } else {
                currentLevel++
                updateLevel()
                totalMoves++
                setTimeout(sequence, 1000)
            }
        }
    } else {
        currentLevel = 1
        updateLevel()
        const gameMessage = document.querySelector('#game-message')
        gameMessage.innerHTML = 'GAME OVER, TRY AGAIN!'
        setTimeout(() => {
            const startButton = document.querySelector('#start-button')
            const gameMessage = document.querySelector('#game-message')
            startButton.style.display = 'block'
            gameMessage.style.display = 'none'
        }, 1000);
    }
}

function updateLevel() {
    document.querySelector('.level').textContent = currentLevel
}

function win() {
    const gameMessage = document.querySelector('#game-message')
    gameMessage.innerHTML = 'WINNER, WINNER, CHICKEN DINNER!'
    setTimeout(() => {
        const startButton = document.querySelector('#start-button')
        startButton.style.display = 'block'
        gameMessage.style.display = 'none'
        currentLevel = 1
        updateLevel()
    }, 3000);
}

document.querySelector('#start-button').addEventListener('click', startGame)

document.querySelectorAll('.color-panels').forEach(panel => {
    panel.addEventListener('click', (e) => {
        const panelPos = e.target.getAttribute('pos');
        highlight(panelPos, 0);
        playAudio(panelPos);
        panelClick(e);
    });
});
