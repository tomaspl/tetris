import { Figure } from "./figure.js";

export class FigureA extends Figure {
    symbol = 'v'
    position = [{x:5, y:0},{x:5, y:1},{x:5, y:2},{x:5, y:3}]
    create = () => {
        console.log('create A')
    };
    avance = () => {
        this.position.forEach((coor) => {
            coor.y = coor.y + 1;
        })
    }
}