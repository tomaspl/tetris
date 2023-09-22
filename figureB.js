import { Figure } from "./figure.js";

export class FigureB extends Figure {
    symbol = 'a'
    position = [{x:5, y:0},{x:5, y:1}]
    create = () => {
        console.log('create B')
    };
    avance = () => {
        this.position.forEach((coor) => {
            coor.y = coor.y + 1;
        })
    }
}