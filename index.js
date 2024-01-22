import { renderBoard, renderGameOver } from "./board.js";
import { BOARD_HEIGHT, BOARD_WIDTH } from './constants.js'
import Tetris from "./tetris.js";

const tetris = new Tetris();

const newGame = () => {
    const board = document.getElementById("board");
    board.innerHTML = "";
    renderBoard();
    tetris.restart();
}

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        tetris.moveLeftCurrentFigure();
    }
    if (event.code === 'ArrowRight') {
        tetris.moveRightCurrentFigure();
    }
    if (event.code === 'Space') {
        tetris.rotateCurrentFigure();
    }
    if (event.code === 'ArrowDown') {
        tetris.moveCurrentFigureUntilBottom();
    }
}, false);


// new game button listener
const myNewButton = document.getElementById("myButton")
myNewButton.addEventListener("click", function () {
    newGame();
    myNewButton.style.display = 'none';
});

setInterval(() => {
    if (tetris && tetris.started) {
        if (tetris.figureGoingDown) {
            if (tetris.matrix[0].some(p => p !== '')) {
                tetris.started = false;
                renderGameOver();
                return;
            }
            if (!tetris.currentFigure ||
                tetris.currentFigure.position.some(elem => elem.y === BOARD_HEIGHT - 1) ||
                tetris.currentFigure.position.some(elem => tetris.matrix[elem.y + 1][elem.x] !== '')) {
                tetris.createFigure();
            } else {
                tetris.progressFigure();
            }
        } else {
            tetris.createFigure();
        }
    }
}, 400)
