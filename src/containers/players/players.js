class Players {
  constructor() {
    this.firstPlayerBadge = document.querySelector('#player--1');
    this.secondPlayerBadge = document.querySelector('#player--2');
  }

  activateBadge(currentPlayer) {
    if (currentPlayer === this.firstPlayerBadge) {
      this.disactivateBadge(this.secondPlayerBadge);
      this.firstPlayerBadge.classList.add('playerIcon--active');
    } else {
      this.disactivateBadge(this.firstPlayerBadge);
      this.secondPlayerBadge.add('playerIcon--active');
    }
  }

  disactivateBadge(player) {
    player.classList.remove('playerIcon--active');
  }
}

const players = new Players();
export { players };
