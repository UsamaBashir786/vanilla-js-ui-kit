export class Toast {
  static show(options = {}) {
    const toast = new Toast(options);
    toast.display();
    return toast;
  }

  constructor(options = {}) {
    this.options = {
      message: options.message || '',
      type: options.type || 'info',
      duration: options.duration || 3000,
      position: options.position || 'top-right'
    };
    
    this.element = null;
  }

  getTypeStyles() {
    const types = {
      success: { background: '#10b981', color: '#fff' },
      error: { background: '#ef4444', color: '#fff' },
      warning: { background: '#f59e0b', color: '#fff' },
      info: { background: '#3b82f6', color: '#fff' }
    };
    return types[this.options.type] || types.info;
  }

  getPositionStyles() {
    const positions = {
      'top-right': { top: '20px', right: '20px' },
      'top-left': { top: '20px', left: '20px' },
      'bottom-right': { bottom: '20px', right: '20px' },
      'bottom-left': { bottom: '20px', left: '20px' },
      'top-center': { top: '20px', left: '50%', transform: 'translateX(-50%)' },
      'bottom-center': { bottom: '20px', left: '50%', transform: 'translateX(-50%)' }
    };
    return positions[this.options.position] || positions['top-right'];
  }

  create() {
    this.element = document.createElement('div');
    this.element.className = 'toast';
    
    const typeStyles = this.getTypeStyles();
    const positionStyles = this.getPositionStyles();
    
    const positionCSS = Object.entries(positionStyles)
      .map(([key, value]) => `${key}: ${value}`)
      .join('; ');
    
    this.element.style.cssText = `
      position: fixed;
      ${positionCSS};
      background: ${typeStyles.background};
      color: ${typeStyles.color};
      padding: 16px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 9999;
      font-size: 14px;
      min-width: 200px;
      max-width: 400px;
      animation: slideIn 0.3s ease-out;
    `;

    this.element.textContent = this.options.message;

    if (!document.getElementById('toast-styles')) {
      const style = document.createElement('style');
      style.id = 'toast-styles';
      style.textContent = `
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  display() {
    this.create();
    document.body.appendChild(this.element);

    if (this.options.duration > 0) {
      setTimeout(() => {
        this.dismiss();
      }, this.options.duration);
    }
  }

  dismiss() {
    if (this.element && this.element.parentNode) {
      this.element.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => {
        if (this.element && this.element.parentNode) {
          this.element.parentNode.removeChild(this.element);
        }
      }, 300);
    }
  }
}