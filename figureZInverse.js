import { Figure } from "./figure.js";
import { BOARD_HEIGHT, BOARD_WIDTH } from './constants.js'

export class FigureZInverse extends Figure {
    symbol = 'e'
    position = [{ x: 6, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 4, y: 1 }]
    avance = () => {
        this.position.forEach((coor) => {
            coor.y = coor.y + 1;
        })
    }
    moveLeft = () => {
        if (this.position.some(p => p.x === 0)) {
            return;
        }
        this.position.forEach(pos => {
            if (pos.x > 0) {
                pos.x = pos.x - 1;
            }
        })
    }
    moveRight = () => {
        if (this.position.some(p => p.x === BOARD_WIDTH - 1)) {
            return;
        }
        this.position.forEach(pos => {
            if (pos.x < BOARD_WIDTH - 1) {
                pos.x = pos.x + 1;
            }
        })
    }
    rotate = () => {
        if (this.position.some(p => p.y === BOARD_HEIGHT - 2)) {
            return;
        }
        /* If it is:
        * |¯|¯|¯|
        * |¯|X|X|
        * |X|X|_|
        */
        if (this.position[0].x - 2 === this.position[3].x) {
            this.position[0].x = this.position[0].x - 1
            this.position[0].y = this.position[0].y + 1

            this.position[2].x = this.position[2].x - 1
            this.position[2].y = this.position[2].y - 1

            this.position[3].y = this.position[3].y - 2
            return;
        } else {
            /* If it is:
            * |X|¯|¯|
            * |X|X|_|
            * |_|X|_|
            */
            this.position[0].x = this.position[0].x + 1
            this.position[0].y = this.position[0].y - 1

            this.position[2].x = this.position[2].x - 1
            this.position[2].y = this.position[2].y - 1

            this.position[3].x = this.position[3].x - 2
        }
    }
}