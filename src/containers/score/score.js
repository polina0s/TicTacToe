import { player } from '../../config/player';
import { scoreStorage } from '../../lib/scorestorage';
export class Score {
  constructor() {
    this.cat = document.querySelector('.score--1');
    this.dog = document.querySelector('.score--2');

    this.score = scoreStorage.getScore();

    this.insertScore();
  }

  increaseScore(winner) {
    if (winner === player.cat) {
      this.score.cat++;
    } else if (winner === player.dog) {
      this.score.dog++;
    }

    scoreStorage.setScore(this.score);
    this.insertScore();
  }

  insertScore() {
    this.cat.innerHTML = this.score.cat;
    this.dog.innerHTML = this.score.dog;
  }
}
