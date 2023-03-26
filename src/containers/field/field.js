import { makeid } from '../../lib/makeid';
import { player } from '../../config/player';
import { players } from '../players/players';

export class Field {
  constructor(onCellClick) {
    this.cells = document.querySelectorAll('.cell');

    this.addDataIdForCells();
    this.addListenerForCells(onCellClick);
  }

  addListenerForCells(onCellClick) {
    this.cells.forEach((el) => {
      el.addEventListener('click', () => {
        const prev = onCellClick(el.id);
        this.selectCell(prev, el);
        el.setAttribute('disabled', 'disabled');
      });
    });
  }

  addDataIdForCells() {
    makeid(this.cells);
  }

  selectCell(prev, cell) {
    if (prev === player.cat) {
      cell.classList.add('cell--tic');
    } else if (prev === player.dog) {
      cell.classList.add('cell--tac');
    }
  }
}
