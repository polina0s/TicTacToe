import { player } from '../../config/player';

export class Modal {
  constructor(onPlayAgainClick) {
    this.modalCont = document.querySelector('#modal-container');
    this.modalImg = document.querySelector('#modal-img');
    this.modalText = document.querySelector('#modal-text');
    this.btnAgain = document.querySelector('#playAgain-btn');

    this.catText = 'CAT IS WIN';
    this.dogText = 'DOG IS WIN';
    this.drawText = 'DRAW';

    this.btnAgain.addEventListener('click', onPlayAgainClick);
  }

  showModal() {
    this.modalCont.classList.add('modal-container--active');
  }

  showCatWinner() {
    this.setContent(this.catText, 'modal-img--cat');
    this.showModal();
  }

  showDogWinner() {
    this.setContent(this.dogText, 'modal-img--dog');
    this.showModal();
  }

  showWinner(winner) {
    if (winner === player.cat) {
      this.showCatWinner();
    } else {
      this.showDogWinner();
    }
  }

  showDraw() {
    this.setContent(this.drawText, 'modal-img--draw');
    this.showModal();
  }

  setContent(text, img) {
    this.modalText.innerHTML = text;
    this.modalImg.classList.add(img);
  }

  hideModal() {
    this.modalCont.classList.remove('modal-container--active');
    this.modalImg.classList.remove(
      'modal-img--cat',
      'modal-img--dog',
      'modal-img--draw'
    );
  }
}
