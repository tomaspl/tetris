import { BOARD_HEIGHT, BOARD_WIDTH } from './constants.js'

const renderBoard = () => {
    for (let j = 0; j < BOARD_HEIGHT; j++) {
        const newRow = document.createElement('div');

        for (let i = 0; i < BOARD_WIDTH; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.setAttribute('rowcolumn', j + ' ' + i);
            newRow.insertBefore(newCell, undefined);
        }
        newRow.classList.add('row');
        board.insertBefore(newRow, undefined);
    }
}

const renderGameOver = () => {
    const board = document.getElementById("board")
    board.innerHTML = "GAME OVER"
    const myNewButton = document.getElementById("myButton");
    myNewButton.style.display = 'block';
}

export { renderBoard, renderGameOver };