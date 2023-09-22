import renderTablero from "./tablero.js";
import Tetris from "./tetris.js";

renderTablero();

const tetris = new Tetris();
tetris.start();

setInterval(() => {
    if(tetris.figureGoingDown){
        if(tetris.currentFigure.position.some(elem => elem.y===23)){
            //tetris.setNewMatrix();
            tetris.createFigure();
        } else {
            tetris.avanceFigure();
        }
    } else {
        tetris.createFigure();
    }
    /*for (let i = 0; i < 10; i++) {
        for(let j = 0; j<24; j++){
            const element = document.querySelector('[rowcolumn="'+j+' '+i+'"]');
            if(tetris.matrix[j][i]!==''){
                element.className = tetris.matrix[j][i]+' cell';
            } else {
                element.className = 'cell'
            }
        }
    }*/
    //tetris.num++;
    //tetris.print();
}, 1000)
