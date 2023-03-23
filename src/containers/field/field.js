export class Field {
  constructor(onCellClick) {
    this.cells = document.querySelectorAll('#cell');

    this.addListenerForCells(onCellClick);
  }

  addListenerForCells(onCellClick) {
    this.cells.forEach((el) => {
      el.addEventListener('click', onCellClick);
    });
  }
}
