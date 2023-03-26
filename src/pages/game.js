import { players } from '../containers/players/players';
import { player } from '../config/player';
import { Field } from '../containers/field/field';
export class Game {
  constructor() {
    this.previousPlayer = null;
    this.player = player.cat;
    this.field = new Field(this.makeAMove.bind(this));

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
    const winner = this.isWin();
    console.log(winner);
    console.log(this.isDraw(this.state));
    return this.previousPlayer;
  }

  updateState(cellId, player) {
    this.state[cellId] = player;
  }

  isDraw(obj) {
    if (Object.values(obj).includes(null)) {
      return false;
    } else {
      return true;
    }
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
        winner = 'cat';
      } else if (cellValues.every(isDog)) {
        winner = 'dog';
      }
    });

    return winner;
  }
}
