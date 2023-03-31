export class Score {
  constructor() {
    this.cat = document.querySelector('.score--1');
    this.dog = document.querySelector('.score--2');

    this.catScore = 0;
    this.dogScore = 0;

    this.insertScore();
  }

  increaseScore(winner) {
    if (winner === 'cat') {
      this.catScore++;
    } else if (winner === 'dog') {
      this.dogScore++;
    }
  }

  insertScore() {
    this.cat.innerHTML = this.catScore;
    this.dog.innerHTML = this.dogScore;
  }
}
