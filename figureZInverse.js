import { Figure } from "./figure.js";

export class FigureZInverse extends Figure {
    symbol = 'e'
    position = [{x:4, y:1},{x:5, y:0},{x:5, y:1}, {x:6, y:0}]
    create = () => {
        console.log('create Z inverse')
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