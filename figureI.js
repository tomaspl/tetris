import { Figure } from "./figure.js";

export class FigureI extends Figure {
    symbol = 'v'
    position = [{x:3, y:0},{x:4, y:0}, {x:5, y:0}, {x:6, y:0}]
    create = () => {
        console.log('created Figure I')
    };
    avance = () => {
        this.position.forEach((coor) => {
            coor.y = coor.y + 1;
        })
    }
    moveLeft = () => {
        if(this.position.some(p => p.x===0)){
            return;
        }
        this.position.forEach(pos => {
            if(pos.x>0){
                pos.x = pos.x-1;
            }
        })
    }
    moveRight = () => {
        if(this.position.some(p => p.x===9)){
            return;
        }
        this.position.forEach(pos => {
            if(pos.x<9){
                pos.x = pos.x+1;
            }
        })
    }

    rotate = () => {
        if(this.position.some(p => p.y === 22)){
            return;
        }
        // If it is horizontal
        if(this.position.every((p) => p.y === this.position[0].y)){
            this.position[0].x = this.position[0].x + 1
            this.position[0].y = this.position[0].y - 1

            this.position[1].x = this.position[1].x
            this.position[1].y = this.position[1].y

            this.position[2].x = this.position[2].x - 1
            this.position[2].y = this.position[2].y + 1

            this.position[3].x = this.position[3].x - 2
            this.position[3].y = this.position[3].y + 2
        } else {
        // If it is vertical
            this.position[0].x = this.position[0].x - 1
            this.position[0].y = this.position[0].y + 1

            this.position[1].x = this.position[1].x
            this.position[1].y = this.position[1].y

            this.position[2].x = this.position[2].x + 1
            this.position[2].y = this.position[2].y - 1

            this.position[3].x = this.position[3].x + 2
            this.position[3].y = this.position[3].y - 2
        }
    }
}