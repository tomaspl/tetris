import { FigureLInverse } from "./figureLInverse.js";
import { FigureI } from "./figureI.js";
import { FigureL } from "./figureL.js";
import { FigureT } from "./figureT.js";
import { FigureSquare } from "./figureSquare.js";
import { FigureZ } from "./figureZ.js";
import { FigureZInverse } from "./figureZInverse.js";
import { BOARD_HEIGHT, BOARD_WIDTH, POINTS_PER_LINE } from './constants.js'

class Tetris {
    points = 0;
    num = 0;
    started = false;
    figureGoingDown = false;
    currentFigure = null;
    tempMatrix = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));
    matrix = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));
    constructor() { }

    restart = () => {
        this.tempMatrix = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));
        this.matrix = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));
        this.currentFigure = null;
        this.started = true;
        this.points = 0;
    }

    print = () => {
        for (let i = 0; i < BOARD_WIDTH; i++) {
            for (let j = 0; j < BOARD_HEIGHT; j++) {
                const element = document.querySelector('[rowcolumn="' + j + ' ' + i + '"]');
                if (this.tempMatrix[j][i] !== '') {
                    element.className = this.tempMatrix[j][i] + ' cell';
                } else {
                    element.className = 'cell';
                }
            }
        }
    }

    start = () => {
        for (let i = 0; i < BOARD_WIDTH; i++) {
            for (let j = 0; j < BOARD_HEIGHT; j++) {
                const element = document.querySelector('[rowcolumn="' + j + ' ' + i + '"]');
                if (this.matrix[j][i] !== '') {
                    element.className = this.matrix[j][i] + ' cell';
                } else {
                    element.className = 'cell';
                }
            }
        }
    }

    createFigure = () => {
        this.matrix = this.tempMatrix.map(row => [...row]);

        const a = Math.floor(Math.random() * 7);
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
        this.currentFigure = figure;
        this.updateMatrix();
        this.figureGoingDown = true;
    }

    progressFigure = () => {
        this.currentFigure.avance();
        this.updateMatrix();
    }

    moveCurrentFigureUntilBottom = () => {
        while (this.currentFigure &&
            this.currentFigure.position.every(elem => elem.y < BOARD_HEIGHT - 1) &&
            this.currentFigure.position.every(elem => this.matrix[elem.y + 1][elem.x] === '')) {
            this.progressFigure();
        }
    }

    updateMatrix = () => {
        this.tempMatrix = this.matrix.map(row => [...row]);
        this.currentFigure.position.forEach(pos => {
            this.tempMatrix[pos.y][pos.x] = this.currentFigure.symbol;
        })

        let rowsUpdates = 0;

        this.tempMatrix = this.tempMatrix.map(row => [...row]).filter(row => {
            if (row.every(c => c !== '')) {
                rowsUpdates++;
                return false
            } else {
                return true
            }

        })
        for (let i = 0; i < rowsUpdates; i++) {
            this.tempMatrix.unshift(['', '', '', '', '', '', '', '', '', ''])
        }

        const counter = document.getElementById("counter")
        this.points = this.points + (rowsUpdates * POINTS_PER_LINE);
        counter.innerHTML = this.points

        this.print()
    }

    moveLeftCurrentFigure = () => {
        if (
            this.matrix[(this.currentFigure.position[0].y)][this.currentFigure.position[0].x - 1] !== '' ||
            this.matrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x - 1] !== '' ||
            this.matrix[(this.currentFigure.position[2].y)][this.currentFigure.position[2].x - 1] !== '' ||
            this.matrix[(this.currentFigure.position[3].y)][this.currentFigure.position[3].x - 1] !== ''
        ) {
            return;
        } else {
            this.currentFigure.moveLeft();
        }
    }

    moveRightCurrentFigure = () => {
        if (
            this.matrix[(this.currentFigure.position[0].y)][this.currentFigure.position[0].x + 1] !== '' ||
            this.matrix[(this.currentFigure.position[1].y)][this.currentFigure.position[1].x + 1] !== '' ||
            this.matrix[(this.currentFigure.position[2].y)][this.currentFigure.position[2].x + 1] !== '' ||
            this.matrix[(this.currentFigure.position[3].y)][this.currentFigure.position[3].x + 1] !== ''
        ) {
            return;
        } else {
            this.currentFigure.moveRight();
        }

    }

    rotateCurrentFigure = () => {
        if (this.currentFigure.symbol === 'v' && this.canRotate(this.currentFigure.position[1], 2) ||
            this.currentFigure.symbol !== 'v' && this.canRotate(this.currentFigure.position[1], 1))
            this.currentFigure.rotate();
        this.updateMatrix();
    }

    canRotate = (cell, radius) => {
        const from = { x: cell.x - radius, y: cell.y - radius };
        const until = { x: cell.x + radius, y: cell.y + radius };
        let rotation = true;
        try {
            for (let i = from.x; i <= until.x; i++) {
                for (let j = from.y; j <= until.y; j++) {
                    if (this.matrix[j][i] !== '') {
                        rotation = false
                    }
                }
            }
        } catch (e) {
            return false
        }
        return rotation;
    }
}



export default Tetris;