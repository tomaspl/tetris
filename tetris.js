import { FigureLInverse } from "./figureLInverse.js";
import { FigureI } from "./figureI.js";
import { FigureL } from "./figureL.js";
import { FigureT } from "./figureT.js";
import { FigureSquare } from "./figureSquare.js";
import { FigureZ } from "./figureZ.js";
import { FigureZInverse } from "./figureZInverse.js";

class Tetris {
    num = 0;
    started = false;
    figureGoingDown =  false;
    currentFigure = null;
    tempMatrix = [
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','']
    ];
    matrix=[
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','',''],
        ['','','','','','','','','','']
    ];
    constructor(){}

    restart = () => {
        this.tempMatrix = [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']
        ];
        this.matrix=[
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']
        ];
        this.currentFigure = null;
        this.started = true

    }

    print = () => {
        for (let i = 0; i < 10; i++) {
            for(let j = 0; j<24; j++){
              const element = document.querySelector('[rowcolumn="'+j+' '+i+'"]');
                if(this.tempMatrix[j][i]!==''){
                    element.className = this.tempMatrix[j][i]+' cell';
                } else {
                    element.className = 'cell'
                }
            }
        }
    }

    start = () => {
        for (let i = 0; i < 10; i++) {
            for(let j = 0; j<24; j++){
                const element = document.querySelector('[rowcolumn="'+j+' '+i+'"]');
                if(this.matrix[j][i]!==''){
                    element.className = this.matrix[j][i]+' cell';
                } else {
                    element.className = 'cell';
                }
            }
        }
    }

    createFigure = () => {
        this.matrix = this.tempMatrix.map(row => [...row]);

        const a = Math.floor(Math.random() * 2);
        let figure = null;
        switch (a) {
            case 0:
                figure = new FigureI();
                break;
            case 1:
                figure = new FigureL();
                break;
            case 2:
                figure = new FigureLInverse();
                break;
            case 3:
                figure = new FigureT();
                break;
            case 4:
                figure = new FigureSquare();
                break;
            case 5:
                figure = new FigureZ();
                break;
            case 6:
                figure = new FigureZInverse();
                break;
        }
        figure.create();
        this.currentFigure = figure;
        this.updateMatrix()
        this.figureGoingDown = true;
    }

    avanceFigure = () => {
        this.currentFigure.avance();
        this.updateMatrix();
    }

    updateMatrix = () => {
        this.tempMatrix = this.matrix.map(row => [...row]);
        this.currentFigure.position.forEach(pos => {
            this.tempMatrix[pos.y][pos.x]=this.currentFigure.symbol;
        })
        this.print()
    }

    moveLeftCurrentFigure = () => {
        if(
            this.matrix[(this.currentFigure.position[0].y)][this.currentFigure.position[0].x-1]!=='' ||
            this.matrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x-1]!=='' ||
            this.matrix[(this.currentFigure.position[2].y)][this.currentFigure.position[2].x-1]!=='' ||
            this.matrix[(this.currentFigure.position[3].y)][this.currentFigure.position[3].x-1]!==''
        ) {
            return;
        } else {
            this.currentFigure.moveLeft();
        }
    }

    moveRightCurrentFigure = () => {
        if(
            this.matrix[(this.currentFigure.position[0].y)][this.currentFigure.position[0].x+1]!=='' ||
            this.matrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x+1]!=='' ||
            this.matrix[(this.currentFigure.position[2].y)][this.currentFigure.position[2].x+1]!=='' ||
            this.matrix[(this.currentFigure.position[3].y)][this.currentFigure.position[3].x+1]!==''
        ) {
            return;
        } else {
            this.currentFigure.moveRight();
        }

    }

    rotateCurrentFigure = () => {
        if(this.currentFigure.symbol === 'v'){
            // if it is horizontal
            if(this.currentFigure.position.every((p) => p.y === this.currentFigure.position[0].y)){
                if( this.tempMatrix[(this.currentFigure.position[1].y)+1][this.currentFigure.position[1].x]==='' &&
                    this.tempMatrix[(this.currentFigure.position[1].y)+2][this.currentFigure.position[1].x]==='') {
                        this.currentFigure.rotate();
                        this.updateMatrix();
                        return;
                    }
            }
            // if it is vertical
            if(this.currentFigure.position.every((p) => p.x === this.currentFigure.position[0].x)){
                if( this.tempMatrix[this.currentFigure.position[1].y][this.currentFigure.position[1].x-1]==='' &&
                    this.tempMatrix[this.currentFigure.position[1].y][this.currentFigure.position[1].x+1]==='' &&
                    this.tempMatrix[this.currentFigure.position[1].y][this.currentFigure.position[1].x+2]==='') {
                    this.currentFigure.rotate();
                    this.updateMatrix();
                    return;
                }
            }

        }
        if(this.currentFigure.symbol === 'r'){
            if(this.currentFigure.position[0].y === this.currentFigure.position[1].y &&
                this.currentFigure.position[1].y === this.currentFigure.position[2].y &&
                this.currentFigure.position[3].y+1 === this.currentFigure.position[2].y){
                    if(
                        this.tempMatrix[(this.currentFigure.position[1].y)+1][this.currentFigure.position[1].x]==='' &&
                        this.tempMatrix[(this.currentFigure.position[1].y)+1][this.currentFigure.position[1].x+1]===''
                    ) {
                        this.currentFigure.rotate();
                        this.updateMatrix();
                        return;
                    }

                }
            if( this.currentFigure.position[0].x === this.currentFigure.position[1].x &&
                this.currentFigure.position[1].x === this.currentFigure.position[2].x &&
                this.currentFigure.position[3].x-1 === this.currentFigure.position[2].x){
                    if(
                        this.tempMatrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x-1]==='' &&
                        this.tempMatrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x+1]==='' &&
                        this.tempMatrix[(this.currentFigure.position[1].y)+1][this.currentFigure.position[1].x-1]===''
                    ) {
                        this.currentFigure.rotate();
                        this.updateMatrix();
                        return;
                    }
            }

            if( this.currentFigure.position[0].y === this.currentFigure.position[1].y &&
                this.currentFigure.position[1].y === this.currentFigure.position[2].y &&
                this.currentFigure.position[3].y-1 === this.currentFigure.position[2].y){
                    if(
                        this.tempMatrix[(this.currentFigure.position[1].y+1)][this.currentFigure.position[1].x]===''
                    ) {
                        this.currentFigure.rotate();
                        this.updateMatrix();
                        return;
                    }
            }

            if( this.currentFigure.position[0].x === this.currentFigure.position[1].x &&
                this.currentFigure.position[1].x === this.currentFigure.position[2].x &&
                this.currentFigure.position[3].x+1 === this.currentFigure.position[2].x){
                    if(
                        this.tempMatrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x+1]==='' &&
                        this.tempMatrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x-1]==='' 
                    ) {
                        this.currentFigure.rotate();
                        this.updateMatrix();
                        return;
                    }
                }
                
        }
    }

}

export default Tetris;