import { Figure } from "./figure.js";

export class FigureC extends Figure {
    symbol = 'r'
    position = [{x:5, y:0},{x:5, y:1},{x:6, y:0},{x:6, y:1}]
    create = () => {
        console.log('create C')
    };
    avance = () => {
        this.position.forEach((coor) => {
            coor.y = coor.y + 1;
        })
    }
}