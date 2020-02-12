# 📁 Unfs

Node.js API like `fs`, but for cloud storage services. If you're used to doing `fs.writeFile()`, this should be easy.

## ☁️ Services

- [ ] AWS S3
- [ ] Azure Storage
- [ ] Google Cloud Storage
- [ ] Firebase Cloud Storage

## 💡 Usage

Install the package from [npm](https://www.npmjs.com/package/unfs):

```bash
npm install unfs
```

With TypeScript or ES6 async modules:

```ts
import Unfs from "unfs";
const fs = new Unfs({
  service: "s3",
  bucket: "s3-bucket-name",
  auth: {}
}));

const url = await fs.writeFile("message.txt", "Hello, world");
console.log("url", url);
```

With Node.js using the Promise API:

```js
const Unfs = require("unfs");
const fs = new Unfs({
  service: "s3",
  bucket: "s3-bucket-name",
  auth: {}
});

fs.writeFile("message.txt", "Hello, world")
  .then(url => console.log("url", url))
  .catch(error => console.error("error", error));
```
