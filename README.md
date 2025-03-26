# 📸 image-url-validator
🔍 A utility function to verify if a given URL points to a valid image by checking its content type.

## 🚀 Features
- ✅ Validates if the URL points to a valid image.
- 🌐 Checks content type using a `HEAD` request.
- 📦 Lightweight and easy to use.

## ⚙️ Installation
You can install the package via npm:
```bash
npm install @mikedeni/image-url-validator
```

## 💡 Example
```js
const isImageURL = require('@mikedeni/image-url-validator');

isImageURL('https://example.com/image.jpg')
  .then(isImage => {
    console.log(isImage ? 'The URL points to an image.' : 'The URL does not point to an image.');
  })
  .catch(error => {
    console.error('Error:', error);
  });
```