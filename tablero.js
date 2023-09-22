
const renderTablero = () => {
    for (let j = 0; j < 24; j++) {
        const newRow = document.createElement('div');

        for(let i = 0; i<10; i++){
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.setAttribute('rowcolumn', j+' '+i);
            newRow.insertBefore(newCell, undefined);
        }
    newRow.classList.add('row');
    tablero.insertBefore(newRow, undefined);
  }
}

export default renderTablero;