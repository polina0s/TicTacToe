import { makeid } from '../../lib/makeid';
import { players } from '../players/players';
export class Field {
  constructor(onCellClick) {
    this.cells = document.querySelectorAll('#cell');

    this.addDataIdForCells();
    this.addListenerForCells(onCellClick);
  }

  addListenerForCells(onCellClick) {
    this.cells.forEach((el) => {
      el.addEventListener('click', () => {
        this.selectCell(this.player, el);
        onCellClick();
      });
    });
  }

  addDataIdForCells() {
    this.cells.forEach((el) => {
      el.setAttribute('data-id', makeid());
    });
  }

  selectCell(player, cell) {
    if (player === players.cat) {
      cell.classList.add('cell--tic');
    } else {
      cell.classList.add('cell--tac');
    }
  }
}
