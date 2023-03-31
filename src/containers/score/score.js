import { player } from '../../config/player';
import { scoreStorage } from '../../lib/scorestorage';
export class Score {
  constructor() {
    this.cat = document.querySelector('.score--1');
    this.dog = document.querySelector('.score--2');
    this.resetScoreBtn = document.querySelector('.score_reset_btn');

    this.score = scoreStorage.getScore();
    this.insertScore();

    this.resetScoreBtn.addEventListener('click', this.resetScore.bind(this));
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

  resetScore() {
    scoreStorage.clearStorage();
    this.score = scoreStorage.getScore();
    this.insertScore();
  }
}
