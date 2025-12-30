# Vanilla JS UI Kit

A lightweight, dependency-free JavaScript UI components library for building responsive user interfaces. Designed with cross-browser compatibility in mind, making it ideal for testing across multiple browsers and devices.

## Features

- **Zero Dependencies**: Pure vanilla JavaScript with no external libraries required
- **Lightweight**: Minimal bundle size for fast page loads
- **Cross-Browser Compatible**: Tested across modern browsers (Chrome, Firefox, Safari, Edge)
- **ES Modules**: Modern JavaScript module system
- **Responsive**: Works seamlessly on desktop and mobile devices
- **Accessible**: Built with accessibility best practices

## Components

- **Modal**: Customizable modal dialogs with backdrop and close functionality
- **Toast**: Non-intrusive notification messages with auto-dismiss
- **Tabs**: Tab navigation system for organizing content

## Installation

### Via npm
```bash
npm install vanilla-js-ui-kit
```

### Via CDN
```html
<script type="module">
  import { Modal, Toast, Tabs } from 'https://cdn.jsdelivr.net/npm/vanilla-js-ui-kit/src/modal.js';
</script>
```

### Manual Download

Download the source files from the `src/` directory and include them in your project.

## Usage

### Modal
```javascript
import { Modal } from './src/modal.js';

const modal = new Modal({
  title: 'Welcome',
  content: 'This is a modal dialog',
  onClose: () => console.log('Modal closed')
});

modal.open();
```

### Toast
```javascript
import { Toast } from './src/toast.js';

Toast.show({
  message: 'Operation successful!',
  type: 'success',
  duration: 3000
});
```

### Tabs
```javascript
import { Tabs } from './src/tabs.js';

const tabs = new Tabs({
  container: '#tabs-container',
  defaultTab: 0
});

tabs.init();
```

## Browser Testing

This library is designed to be tested across multiple browsers and devices. It follows web standards and uses progressive enhancement techniques to ensure compatibility.

Ideal for integration with cross-browser testing tools like BrowserStack, Selenium, or Playwright.

## Demo

To run the demo locally, you need to use a local web server (ES modules require HTTP protocol):

### Using Python (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000/demo/index.html` in your browser.

### Using Node.js
```bash
# Using npx (no installation required)
npx serve

# Or install http-server globally
npm install -g http-server
http-server
```

### Using VS Code

1. Install the "Live Server" extension
2. Right-click on `demo/index.html`
3. Select "Open with Live Server"

**Note:** Opening `demo/index.html` directly from the file system will result in CORS errors due to browser security restrictions with ES modules.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style
- Works across modern browsers
- Includes comments for complex logic
- Does not introduce external dependencies

## License

MIT License - see [LICENSE](LICENSE) file for details

## Support

If you find this project useful, please consider:
- Starring the repository
- Reporting bugs or requesting features via Issues
- Contributing code improvements

---

Built with ❤️ for the open-source community