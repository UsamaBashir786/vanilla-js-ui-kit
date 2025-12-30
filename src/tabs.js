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
    if (typeof this.options.container === 'string') {
      this.container = document.querySelector(this.options.container);
    } else {
      this.container = this.options.container;
    }

    if (!this.container) {
      console.error('Tabs: Container not found');
      return;
    }

    this.tabButtons = Array.from(this.container.querySelectorAll('[data-tab-button]'));
    this.tabPanels = Array.from(this.container.querySelectorAll('[data-tab-panel]'));

    if (this.tabButtons.length === 0 || this.tabPanels.length === 0) {
      console.error('Tabs: No tab buttons or panels found');
      return;
    }

    this.setupEventListeners();
    this.applyStyles();
    this.showTab(this.activeIndex);
  }

  setupEventListeners() {
    this.tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.showTab(index);
      });
    });
  }

  applyStyles() {
    const tabList = this.tabButtons[0]?.parentElement;
    if (tabList) {
      tabList.style.cssText = `
        display: flex;
        border-bottom: 2px solid #e5e7eb;
        margin-bottom: 16px;
      `;
    }

    this.tabButtons.forEach(button => {
      button.style.cssText = `
        background: none;
        border: none;
        padding: 12px 24px;
        cursor: pointer;
        font-size: 16px;
        color: #6b7280;
        border-bottom: 2px solid transparent;
        margin-bottom: -2px;
        transition: all 0.2s;
      `;
    });

    this.tabPanels.forEach(panel => {
      panel.style.cssText = `
        display: none;
      `;
    });
  }

  showTab(index) {
    if (index < 0 || index >= this.tabButtons.length) {
      return;
    }

    this.tabButtons.forEach((button, i) => {
      if (i === index) {
        button.style.color = '#3b82f6';
        button.style.borderBottomColor = '#3b82f6';
      } else {
        button.style.color = '#6b7280';
        button.style.borderBottomColor = 'transparent';
      }
    });

    this.tabPanels.forEach((panel, i) => {
      panel.style.display = i === index ? 'block' : 'none';
    });

    this.activeIndex = index;

    if (this.options.onChange) {
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