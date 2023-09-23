import renderTablero from "./tablero.js";
import Tetris from "./tetris.js";

renderTablero();

const tetris = new Tetris();
tetris.start();
/*var e = new KeyboardEvent("keyleft", {
    key: "Escape",
    bubbles: true,
    cancelable: true
});
document.dispatchEvent(e);
document.addEventListener('keyleft', function(e) {
    tetris.moveLeftCurrentFigure();
});*/
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

setInterval(() => {
    if(tetris.figureGoingDown){
        if( tetris.currentFigure.position.some(elem => elem.y===23)||
            tetris.currentFigure.position.some(elem => tetris.matrix[elem.y+1][elem.x]!=='')){
            tetris.createFigure();
        } else {
            tetris.avanceFigure();
        }
    } else {
        tetris.createFigure();
    }
}, 300)
