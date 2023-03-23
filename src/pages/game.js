import { players } from '../containers/players/players';

const player = {
  cat: 'cat',
  dog: 'dog',
};

export class Game {
  constructor() {
    this.player = player.cat;
  }

  togglePlayer() {
    if (this.player === player.cat) {
      // players.disactivateBadge(cat)
      this.player = player.dog;
      players.activateBadge(this.player);
    } else {
      // players.disactivateBadge(dog)
      this.player = player.cat;
      players.activateBadge(this.player);
    }
  }

  makeAMove() {
    
  }
}
