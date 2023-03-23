import { player } from '../../config/player';

class Players {
  constructor() {
    this.firstPlayerBadge = document.querySelector('#player--1');
    this.secondPlayerBadge = document.querySelector('#player--2');
  }

  activateBadge(currentPlayer) {
    if (currentPlayer === player.cat) {
      this.disactivateBadge(this.secondPlayerBadge);
      this.firstPlayerBadge.classList.add('playerIcon--active');
    } else {
      this.disactivateBadge(this.firstPlayerBadge);
      this.secondPlayerBadge.classList.add('playerIcon--active');
    }
  }

  disactivateBadge(badge) {
    badge.classList.remove('playerIcon--active');
  }
}

const players = new Players();
export { players };
