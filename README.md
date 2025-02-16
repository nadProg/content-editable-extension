# 📝 Content Editable

[![Mozilla Add-on](https://img.shields.io/amo/v/content-editable.svg?style=flat-square)](https://addons.mozilla.org/en-US/firefox/addon/content-editable/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://github.com/nadProg/content-editable-extension/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/nadprog/content-editable-extension?style=flat-square)](https://github.com/nadProg/content-editable-extension/stargazers)

A simple Firefox extension that enables **contentEditable** mode on any webpage with a single click.

## 🚀 Features

- ✅ Toggle body `contentEditable` attribute
- ✅ Works on any webpage
- ✅ Lightweight & open-source

## 🔒 Permissions
This extension requires the following permissions:

- `tabs` – To detect the active tab and modify its content.
- `activeTab` – To modify the currently active page.
- `scripting` – To inject scripts that enable content editing.

Your privacy is important! This extension does not collect any personal data or track your browsing activity.

## 📥 Installation

### 🔥 Firefox (AMO)
1. Go to the [official add-on page](https://addons.mozilla.org/en-US/firefox/addon/content-editable/)
2. Click **Add to Firefox**

## 🎮 Usage

1. Click the extension icon in the toolbar
2. The page becomes **editable** (you can modify any text)
3. Click again to disable edit mode

## 💡 Contributing
Contributions are welcome! Feel free to submit an issue or pull request.
See the Contribution Guide for more details.

## 🛠️ For Firefox Add-on Reviewers

### Prerequisites
- Install [Node.js](https://nodejs.org/) (LTS version recommended)
- Install [web-ext](https://github.com/mozilla/web-ext):
  ```sh
  npm install -g web-ext
  ```

### Build Steps
- Install dependencies
  ```sh
  npm install
  ```
- Compile the extension into `web-ext-artifacts` directory
  ```sh
  npm run build
  ```

## 📜 License
This project is licensed under the MIT License.

## 🌎 Links
- 🔗 Firefox Add-on Page: [Content Editable](https://addons.mozilla.org/en-US/firefox/addon/content-editable/)
- 📂 GitHub Repository: [GitHub](https://github.com/nadProg/content-editable-extension)
- 🐞 Report Issues: [GitHub Issues](https://github.com/nadProg/content-editable-extension/issues)