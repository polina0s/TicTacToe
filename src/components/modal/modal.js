export class Modal {
  constructor() {
    this.modalCont = document.querySelector('#modal-container');
    this.modalImg = document.querySelector('#modal-img');
    this.modalText = document.querySelector('#modal-text');
    this.btnAgain = document.querySelector('#playAgain-btn');

    this.catText = 'CAT IS WIN';
    this.dogText = 'DOG IS WIN';
    this.drawText = 'DRAW';

    this.playAgain();
  }

  showModal() {
    this.modalCont.classList.add('modal-container--active');
  }

  showCatWinner() {
    this.modalText.innerHTML = this.catText;
    this.modalImg.classList.add('modal-img--cat');
    this.showModal();
  }

  showDogWinner() {
    this.modalText.innerHTML = this.dogText;
    this.modalImg.classList.add('modal-img--dog');
    this.showModal();
  }

  showDraw() {
    this.modalText.innerHTML = this.drawText;
    this.modalImg.classList.add('modal-img--draw');
    this.showModal();
  }

  playAgain() {
    this.btnAgain.addEventListener('click', () => {
      location.reload();
    });
  }
}
