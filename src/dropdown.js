export class Dropdown {
  constructor(options = {}) {
    this.options = {
      trigger: options.trigger || null,  // button or element
      menu: options.menu || null          // dropdown menu element
    };
    this.isOpen = false;
  }

  init() {
    if (!this.options.trigger || !this.options.menu) {
      console.error('Dropdown: trigger or menu not provided');
      return;
    }

    this.options.trigger.addEventListener('click', () => this.toggle());
    document.addEventListener('click', (e) => {
      if (!this.options.trigger.contains(e.target) && !this.options.menu.contains(e.target)) {
        this.close();
      }
    });

    this.options.menu.style.display = 'none';
    this.options.menu.style.position = 'absolute';
    this.options.menu.style.minWidth = '150px';
    this.options.menu.style.background = '#fff';
    this.options.menu.style.border = '1px solid #d0d7de';
    this.options.menu.style.borderRadius = '6px';
    this.options.menu.style.padding = '8px 0';
    this.options.menu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    this.options.menu.style.zIndex = '1000';
  }

  open() {
    this.options.menu.style.display = 'block';
    this.isOpen = true;
  }

  close() {
    this.options.menu.style.display = 'none';
    this.isOpen = false;
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }
}
