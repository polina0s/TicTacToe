import { makeid } from '../../lib/makeid';
export class Field {
  constructor(onCellClick) {
    this.cells = document.querySelectorAll('#cell');

    this.addDataIdForCells();
    this.addListenerForCells(onCellClick);
  }

  addListenerForCells(onCellClick) {
    this.cells.forEach((el) => {
      el.addEventListener('click', onCellClick);
    });
  }

  addDataIdForCells() {
    this.cells.forEach((el) => {
      el.setAttribute('data-id', makeid());
    });
  }
}
