export default class QABlock {
  constructor(element) {
    this.block = element;
    this.question = this.block.querySelector('.qa__question');
    this.answer = this.block.querySelector('.qa__answer');
    this.isOpen = this.block.classList.contains('open');

    this.question.addEventListener('click', () => this.toggle());
  }

  open() {
    this.block.classList.add('open');
    this.answer.style.height = this.answer.scrollHeight + 'px';
    this.isOpen = true;
  }

  close() {
    this.block.classList.remove('open');
    this.answer.style.height = '0px';
    this.isOpen = false;
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      qaBlocks.forEach(block => block.close());
      this.open();
    }
  }
}

const qaBlocks = Array.from(document.querySelectorAll('.qa__block')).map(block => new QABlock(block));