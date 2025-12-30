export class Tabs {
  constructor(options = {}) {
    this.options = {
      container: options.container || null,
      defaultTab: options.defaultTab || 0,
      onChange: options.onChange || null
    };

    this.container = null;
    this.tabButtons = [];
    this.tabPanels = [];
    this.activeIndex = this.options.defaultTab;
  }

  init() {
    this.container = 
      typeof this.options.container === 'string'
        ? document.querySelector(this.options.container)
        : this.options.container;

    if (!this.container) {
      console.error('Tabs: Container not found');
      return;
    }

    this.tabButtons = Array.from(this.container.querySelectorAll('[data-tab-button]'));
    this.tabPanels = Array.from(this.container.querySelectorAll('[data-tab-panel]'));

    if (!this.tabButtons.length || !this.tabPanels.length) {
      console.error('Tabs: No tab buttons or panels found');
      return;
    }

    this.applyStyles();
    this.setupEventListeners();
    this.showTab(this.activeIndex);
  }

  setupEventListeners() {
    this.tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => this.showTab(index));
    });
  }

  applyStyles() {
    const tabList = this.tabButtons[0]?.parentElement;
    if (tabList) {
      Object.assign(tabList.style, {
        display: 'flex',
        borderBottom: '2px solid #e5e7eb',
        marginBottom: '16px'
      });
    }

    this.tabButtons.forEach(button => {
      Object.assign(button.style, {
        background: 'none',
        border: 'none',
        padding: '12px 24px',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#6b7280',
        borderBottom: '2px solid transparent',
        marginBottom: '-2px',
        transition: 'all 0.2s'
      });
    });

    this.tabPanels.forEach(panel => {
      panel.style.display = 'none';
    });
  }

  showTab(index) {
    if (index < 0 || index >= this.tabButtons.length) return;

    this.tabButtons.forEach((button, i) => {
      button.style.color = i === index ? '#3b82f6' : '#6b7280';
      button.style.borderBottomColor = i === index ? '#3b82f6' : 'transparent';
    });

    this.tabPanels.forEach((panel, i) => {
      panel.style.display = i === index ? 'block' : 'none';
    });

    this.activeIndex = index;

    if (typeof this.options.onChange === 'function') {
      this.options.onChange(index);
    }
  }

  getActiveIndex() {
    return this.activeIndex;
  }

  setActiveTab(index) {
    this.showTab(index);
  }
}
