export class Modal {
  constructor(options = {}) {
    this.options = {
      title: options.title || 'Modal',
      content: options.content || '',
      onClose: options.onClose || null,
      closeOnBackdrop: options.closeOnBackdrop !== false
    };
    
    this.modalElement = null;
    this.backdropElement = null;
  }

  create() {
    this.backdropElement = document.createElement('div');
    this.backdropElement.className = 'modal-backdrop';
    this.backdropElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    `;

    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal';
    this.modalElement.style.cssText = `
      background: white;
      border-radius: 8px;
      padding: 24px;
      max-width: 500px;
      width: 90%;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      position: relative;
    `;

    const header = document.createElement('div');
    header.className = 'modal-header';
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    `;

    const title = document.createElement('h2');
    title.textContent = this.options.title;
    title.style.cssText = `
      margin: 0;
      font-size: 24px;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'modal-close';
    closeBtn.style.cssText = `
      background: none;
      border: none;
      font-size: 32px;
      cursor: pointer;
      color: #666;
      padding: 0;
      width: 32px;
      height: 32px;
      line-height: 1;
    `;
    closeBtn.addEventListener('click', () => this.close());

    const content = document.createElement('div');
    content.className = 'modal-content';
    content.innerHTML = this.options.content;

    header.appendChild(title);
    header.appendChild(closeBtn);
    this.modalElement.appendChild(header);
    this.modalElement.appendChild(content);
    this.backdropElement.appendChild(this.modalElement);

    if (this.options.closeOnBackdrop) {
      this.backdropElement.addEventListener('click', (e) => {
        if (e.target === this.backdropElement) {
          this.close();
        }
      });
    }

    document.addEventListener('keydown', this.handleEscape);
  }

  handleEscape = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  open() {
    this.create();
    document.body.appendChild(this.backdropElement);
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.backdropElement && this.backdropElement.parentNode) {
      this.backdropElement.parentNode.removeChild(this.backdropElement);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', this.handleEscape);
      
      if (this.options.onClose) {
        this.options.onClose();
      }
    }
  }
}