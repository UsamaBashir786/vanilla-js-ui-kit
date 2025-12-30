# Vanilla JS UI Kit

A lightweight, dependency-free JavaScript UI components library for building responsive user interfaces using pure JavaScript. Designed with cross-browser compatibility in mind, making it ideal for testing across multiple browsers and devices.

## Features

- **Zero Dependencies** – Pure vanilla JavaScript, no external libraries
- **Lightweight** – Minimal footprint and fast performance
- **Cross-Browser Compatible** – Works consistently across Chrome, Firefox, Safari, and Edge
- **ES Modules** – Modern JavaScript module architecture
- **Responsive** – Mobile- and desktop-friendly by default
- **Accessible** – Keyboard support and accessibility best practices

## Components

- **Modal** – Configurable modal dialogs with backdrop, Escape key handling, and callbacks
- **Toast** – Lightweight notification system with multiple message types
- **Tabs** – Accessible tab navigation for structured content
- **Dropdown** – Toggleable dropdown menus with click-outside handling
- **Accordion** – Collapsible content sections for structured layouts

## Installation

### Direct Usage (Recommended)

Clone or download the repository and import the components directly using ES modules.

```bash
git clone https://github.com/UsamaBashir786/vanilla-js-ui-kit.git
```

Then include the required component files from the src/ directory.

### CDN (Experimental)

For testing or demo purposes, you can import individual components directly from GitHub:

```html
<script type="module">
  import { Modal } from 'https://raw.githubusercontent.com/UsamaBashir786/vanilla-js-ui-kit/main/src/modal.js';
  import { Toast } from 'https://raw.githubusercontent.com/UsamaBashir786/vanilla-js-ui-kit/main/src/toast.js';
  import { Tabs } from 'https://raw.githubusercontent.com/UsamaBashir786/vanilla-js-ui-kit/main/src/tabs.js';
  import { Dropdown } from 'https://raw.githubusercontent.com/UsamaBashir786/vanilla-js-ui-kit/main/src/dropdown.js';
  import { Accordion } from 'https://raw.githubusercontent.com/UsamaBashir786/vanilla-js-ui-kit/main/src/accordion.js';
</script>
```

Note: For production usage, it is recommended to bundle the files locally.

## Usage

### Modal

```js
import { Modal } from './src/modal.js';

const modal = new Modal({
  title: 'Welcome',
  content: '<p>This is a modal dialog</p>',
  onClose: () => console.log('Modal closed')
});

modal.open();
```

### Toast

```js
import { Toast } from './src/toast.js';

Toast.show({
  message: 'Operation completed successfully!',
  type: 'success',
  duration: 3000
});
```

### Tabs

```js
import { Tabs } from './src/tabs.js';

new Tabs({
  container: document.getElementById('tabs-container')
});
```

### Dropdown

```js
import { Dropdown } from './src/dropdown.js';

const dropdown = new Dropdown({
  trigger: document.getElementById('dropdown-btn'),
  menu: document.getElementById('dropdown-menu')
});
dropdown.init();
```

### Accordion

```js
import { Accordion } from './src/accordion.js';

const accordion = new Accordion({
  container: document.getElementById('accordion-container')
});
accordion.init();
```

## Browser Testing

This project is actively used to validate UI behavior across multiple browsers and devices.
It follows web standards and progressive enhancement principles to ensure consistent rendering.

The components are suitable for cross-browser testing using tools such as BrowserStack, Playwright, or Selenium.

## Demo

To run the demo locally, you must use a local web server (ES modules require HTTP).

### Using Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Open the demo in your browser:

```bash
http://localhost:8000/demo/index.html
```

### Using Node.js

```bash
npx serve
```

or

```bash
npm install -g http-server
http-server
```

### Using VS Code

1. Install the Live Server extension
2. Right-click demo/index.html
3. Select "Open with Live Server"

Opening the file directly from the file system may cause CORS issues due to ES module restrictions.

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to your branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

Please ensure:

- Code follows existing style
- No external dependencies are added
- Changes work across modern browsers

## License

This project is licensed under the MIT License.
See the LICENSE file for details.

## Support

If you find this project useful:

- ⭐ Star the repository
- 🐞 Report bugs via GitHub Issues
- 🚀 Suggest improvements or features

Built with ❤️ for the open-source community