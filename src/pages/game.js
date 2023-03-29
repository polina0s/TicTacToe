import { players } from '../containers/players/players';
import { player } from '../config/player';
import { Field } from '../containers/field/field';
import { Modal } from '../components/modal/modal';
export class Game {
  constructor() {
    this.previousPlayer = null;
    this.player = player.cat;
    this.field = new Field(this.makeAMove.bind(this));
    this.modal = new Modal();

    this.state = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
    };

    this.winComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    players.activateBadge(this.player);
  }

  togglePlayer() {
    this.previousPlayer = this.player;

    if (this.player === player.cat) {
      this.player = player.dog;
    } else if (this.player === player.dog) {
      this.player = player.cat;
    }

    players.activateBadge(this.player);
  }

  makeAMove(cellId) {
    this.togglePlayer();
    this.updateState(cellId, this.previousPlayer);
    this.isGameOver();

    return this.previousPlayer;
  }

  updateState(cellId, player) {
    this.state[cellId] = player;
  }

  isDraw(obj) {
    return !Object.values(obj).includes(null);
  }

  isWin() {
    let winner = null;

    this.winComb.forEach((combination) => {
      const isCat = (value) => value === player.cat;
      const isDog = (value) => value === player.dog;
      const cellValues = [];

      for (let i = 0; i < combination.length; i++) {
        cellValues.push(this.state[combination[i]]);
      }

      if (cellValues.every(isCat)) {
        winner = player.cat;
      } else if (cellValues.every(isDog)) {
        winner = player.dog;
      }
    });

    return winner;
  }

  isGameOver() {
    const winner = this.isWin();
    const draw = this.isDraw(this.state);

    if (winner === 'cat') {
      this.modal.showCatWinner();
      this.field.disableAllCells();
    } else if (winner === 'dog') {
      this.modal.showDogWinner();
      this.field.disableAllCells();
    } else if (draw) {
      this.modal.showDraw();
      this.field.disableAllCells();
    }
  }
}
