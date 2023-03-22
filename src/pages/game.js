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
      this.player = player.dog;
    } else {
      this.player = player.cat;
    }
  }
}
