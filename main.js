let moves
let totalMoves

function highlight(panelPos, time) {
    setTimeout(() => {
        document.querySelector('.color-panels[pos="' + panelPos + '"]').classList.add('active')
        setTimeout(() => {
            document.querySelector('.color-panels[pos="' + panelPos + '"]').classList.remove('active')
        }, 300)
    }, time)
}

function sequenceMoves(current) {
    moves.push(Math.floor(Math.random() * 4) + 1)
    if(current < totalMoves) {
        sequenceMoves(++current)
    }
}

function startGame() {
    moves = []
    totalMoves = 2
    document.querySelector('#start-button').style.display = 'none'
    document.querySelector('#game-message').style.display = 'block'
}

function sequence() {
    sequenceMoves(1)
    document.querySelector(('#game-message')).innerHTML = 'Simon Says'

    for (let i = 0; i < moves.length; i++ ) {
        highlight(moves[i], 600 * 1)
    }
    setTimeout(() => {
        document.querySelector('#game-message').innerHTML = 'Repeat the Sequence'
    }, 600 * moves.length)
}

function panelClick(e) {
    let panelPos = e.target.getAttribute('pos')
    highlight(panelPos, 0)

    if(moves && moves.length) {
        if (moves[0] == panelPos) {

            if(!moves.length) {
                totalMoves++
                setTimeout(() => {
                    sequence()
                }, 1000)
            }
        }
        else {
            document.querySelector('#game-message').innerHTML = 'GAME OVER, TRY AGAIN!'
            setTimeout(() => {
                document.querySelector('#start-button').style.display = 'block'
                document.querySelector(('#game-message')).style.display = 'none'
            }, 1000)
        }
    }

}

document.querySelector('#start-button').addEventListener('click', startGame)
let cells= Array.from(document.querySelectorAll('.color-panels'))

panels.forEach(panel => {
    panel.addEventListener('click',panelClick)
})