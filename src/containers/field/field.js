import { makeid } from '../../lib/makeid';
import { player } from '../../config/player';

export class Field {
  constructor(onCellClick) {
    this.cells = document.querySelectorAll('#cell');

    this.addDataIdForCells();
    this.addListenerForCells(onCellClick);
  }

  addListenerForCells(onCellClick) {
    this.cells.forEach((el) => {
      el.addEventListener('click', () => {
        const prev = onCellClick();
        this.selectCell(prev, el);
      });
    });
  }

  addDataIdForCells() {
    makeid(this.cells);
  }

  selectCell(prev, cell) {
    if (prev === player.cat) {
      cell.classList.add('cell--tic');
    } else {
      cell.classList.add('cell--tac');
    }
  }
}
