import { players } from '../containers/players/players';
import { player } from '../config/player';
import { Field } from '../containers/field/field';
export class Game {
  constructor() {
    this.previousPlayer = null;
    this.player = player.cat;
    this.field = new Field(this.makeAMove.bind(this));

    players.activateBadge(this.player);
  }

  togglePlayer() {
    this.previousPlayer = this.player;

    if (this.player === player.cat) {``
      this.player = player.dog;
    } else {
      this.player = player.cat;
    }

    players.activateBadge(this.player);
  }

  makeAMove() {
    this.togglePlayer();
    return this.previousPlayer;
  }
}
