import { Score } from '../containers/score/score';

class ScoreStorage {
  constructor() {
    this.getScore();
    this.name = 'score';
  }

  getScore() {
    const score =
      localStorage.getItem(this.name) || JSON.stringify({ cat: 0, dog: 0 });
    return JSON.parse(score);
  }

  setScore(score) {
    const stringified = JSON.stringify(score);
    localStorage.setItem(this.name, stringified);
  }
}

const scoreStorage = new ScoreStorage();
export { scoreStorage };
