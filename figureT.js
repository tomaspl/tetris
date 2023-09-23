import { Figure } from "./figure.js";

export class FigureT extends Figure {
    symbol = 'p'
    position = [{x:5, y:1},{x:6, y:1}, {x:7, y:1}, {x:6, y:0}]
    create = () => {
        console.log('create T')
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
    rotate = () => {}
}