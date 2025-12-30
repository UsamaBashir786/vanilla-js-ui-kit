export class Accordion {
  constructor(container) {
    this.container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!this.container) return console.error('Accordion: container not found');
    this.items = Array.from(this.container.querySelectorAll('.accordion-item'));
  }

  init() {
    this.items.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      header.addEventListener('click', () => {
        const isOpen = header.classList.contains('active');
        this.items.forEach(i => {
          i.querySelector('.accordion-header').classList.remove('active');
          i.querySelector('.accordion-content').style.display = 'none';
        });
        if (!isOpen) {
          header.classList.add('active');
          content.style.display = 'block';
        }
      });
    });
  }
}
