import { players } from '../containers/players/players';
import { player } from '../config/player';
import { INITIAL_STATE, WIN_COMBO } from '../config/game';
import { Field } from '../containers/field/field';
import { Modal } from '../components/modal/modal';
import { Score } from '../containers/score/score';
export class Game {
  constructor() {
    this.previousPlayer = null;
    this.setInitialData();

    this.field = new Field(this.makeAMove.bind(this));
    this.modal = new Modal(this.startOver.bind(this));
    this.score = new Score();
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

    WIN_COMBO.forEach((combination) => {
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

    if (winner) {
      this.score.increaseScore(winner);
      this.modal.showWinner(winner);
      this.field.disableAllCells();
    } else if (draw) {
      this.modal.showDraw();
      this.field.disableAllCells();
    }
  }

  resetState() {
    this.state = { ...INITIAL_STATE };
  }

  setInitialData() {
    this.resetState();
    this.player = player.cat;
    players.activateBadge(this.player);
  }

  startOver() {
    this.setInitialData();
    this.field.resetCellsStyles();
    this.modal.hideModal();
  }
}
