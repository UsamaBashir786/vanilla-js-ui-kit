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

  // Create modal DOM elements
  create() {
    // Backdrop
    this.backdropElement = document.createElement('div');
    this.backdropElement.className = 'modal-backdrop';
    Object.assign(this.backdropElement.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '1000'
    });

    // Modal container
    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal';
    Object.assign(this.modalElement.style, {
      background: '#fff',
      borderRadius: '8px',
      padding: '24px',
      maxWidth: '500px',
      width: '90%',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'relative'
    });

    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';
    Object.assign(header.style, {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    });

    const title = document.createElement('h2');
    title.textContent = this.options.title;
    Object.assign(title.style, { margin: 0, fontSize: '24px' });

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.className = 'modal-close';
    Object.assign(closeBtn.style, {
      background: 'none',
      border: 'none',
      fontSize: '32px',
      cursor: 'pointer',
      color: '#666',
      padding: '0',
      width: '32px',
      height: '32px',
      lineHeight: '1'
    });
    closeBtn.addEventListener('click', () => this.close());

    const content = document.createElement('div');
    content.className = 'modal-content';
    content.innerHTML = this.options.content;

    header.appendChild(title);
    header.appendChild(closeBtn);
    this.modalElement.appendChild(header);
    this.modalElement.appendChild(content);
    this.backdropElement.appendChild(this.modalElement);

    // Close on backdrop click
    if (this.options.closeOnBackdrop) {
      this.backdropElement.addEventListener('click', (e) => {
        if (e.target === this.backdropElement) this.close();
      });
    }

    document.addEventListener('keydown', this.handleEscape);
  }

  handleEscape = (e) => {
    if (e.key === 'Escape') this.close();
  };

  open() {
    this.create();
    document.body.appendChild(this.backdropElement);
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (this.backdropElement?.parentNode) {
      this.backdropElement.parentNode.removeChild(this.backdropElement);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', this.handleEscape);
      if (typeof this.options.onClose === 'function') this.options.onClose();
    }
  }
}
