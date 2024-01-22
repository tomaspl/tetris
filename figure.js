export class Figure {
    progress = () => {
        throw new Error('The abstract method must be implemented by the child classes.')
    };
    moveLeft = () => {
        throw new Error('The abstract method must be implemented by the child classes.')
    };
    moveRight = () => {
        throw new Error('The abstract method must be implemented by the child classes.')
    };
    rotate = () => {
        throw new Error('The abstract method must be implemented by the child classes.')
    };
}