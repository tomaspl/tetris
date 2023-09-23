import {renderTablero, renderGameOver} from "./tablero.js";
import Tetris from "./tetris.js";

const tetris = new Tetris();

const newGame = () => {
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";
    renderTablero();
    tetris.restart();    
}

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    if(event.code==='ArrowLeft'){
        tetris.moveLeftCurrentFigure();
    }
    if(event.code==='ArrowRight'){
        tetris.moveRightCurrentFigure();
    }
    if(event.code==='Space'){
        tetris.rotateCurrentFigure();
    }
}, false);


// new game button listener
const myNewButton = document.getElementById("myButton")
myNewButton.addEventListener("click", function() {
    newGame();
    myNewButton.style.display = 'none';
});

setInterval(() => {
    if(tetris && tetris.started){
        if(tetris.figureGoingDown){
            if(tetris.matrix[0].some(p => p!=='')){
                tetris.started = false;
                renderGameOver();
                return;
            }
            if( !tetris.currentFigure ||
                tetris.currentFigure.position.some(elem => elem.y===23)||
                tetris.currentFigure.position.some(elem => tetris.matrix[elem.y+1][elem.x]!=='')){
                tetris.createFigure();
            } else {
                tetris.avanceFigure();
            }
        } else {
            tetris.createFigure();
        }
    }
}, 100)
