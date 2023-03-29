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
    this.setContent(this.dogText, 'modal-img--dog');
    this.showModal();
  }

  showDraw() {
    this.setContent(this.drawText, 'modal-img--draw');
    this.showModal();
  }

  setContent(text, img) {
    this.modalText.innerHTML = text;
    this.modalImg.classList.add(img);
  }

  playAgain() {
    this.btnAgain.addEventListener('click', () => {
      location.reload();
    });
  }
}
