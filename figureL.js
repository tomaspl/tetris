import { Figure } from "./figure.js";

export class FigureL extends Figure {
    symbol = 'r'
    position = [{ x: 4, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 }, { x: 6, y: 0 }]
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
        if (this.position.some(p => p.x === 9)) {
            return;
        }
        this.position.forEach(pos => {
            if (pos.x < 9) {
                pos.x = pos.x + 1;
            }
        })
    }
    rotate = () => {
        if (this.position.some(p => p.y === 22)) {
            return;
        }
        /* If it is:
        * |¯|¯|X|
        * |X|X|X|
        * |_|_|_|
        */
        if (this.position[0].y === this.position[1].y &&
            this.position[1].y === this.position[2].y &&
            this.position[3].y + 1 === this.position[2].y) {
            this.position[0].x = this.position[0].x + 1
            this.position[0].y = this.position[0].y - 1

            this.position[2].x = this.position[2].x - 1
            this.position[2].y = this.position[2].y + 1

            this.position[3].x = this.position[3].x
            this.position[3].y = this.position[3].y + 2
            return;
        }

        /* If it is:
        * |_|X|_|
        * |_|X|_|
        * |_|X|X|
        */
        if (this.position[0].x === this.position[1].x &&
            this.position[1].x === this.position[2].x &&
            this.position[3].x - 1 === this.position[2].x) {
            this.position[0].x = this.position[0].x + 1
            this.position[0].y = this.position[0].y + 1

            this.position[2].x = this.position[2].x - 1
            this.position[2].y = this.position[2].y - 1

            this.position[3].x = this.position[3].x - 2
            this.position[3].y = this.position[3].y
            return;
        }

        /* If it is:
        * |_|_|_|
        * |X|X|X|
        * |X|_|_|
        */
        if (this.position[0].y === this.position[1].y &&
            this.position[1].y === this.position[2].y &&
            this.position[3].y - 1 === this.position[2].y) {
            this.position[0].x = this.position[0].x - 1
            this.position[0].y = this.position[0].y + 1

            this.position[2].x = this.position[2].x + 1
            this.position[2].y = this.position[2].y - 1

            this.position[3].x = this.position[3].x
            this.position[3].y = this.position[3].y - 2
            return;
        }

        /* If it is:
        * |X|X|_|
        * |_|X|_|
        * |_|X|_|
        */
        if (this.position[0].x === this.position[1].x &&
            this.position[1].x === this.position[2].x &&
            this.position[3].x + 1 === this.position[2].x) {
            this.position[0].x = this.position[0].x - 1
            this.position[0].y = this.position[0].y - 1

            this.position[2].x = this.position[2].x + 1
            this.position[2].y = this.position[2].y + 1

            this.position[3].x = this.position[3].x + 2
            this.position[3].y = this.position[3].y
            return;
        }
    }
}