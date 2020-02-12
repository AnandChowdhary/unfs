# 📁 Unfs

Node.js API like `fs`, but for cloud storage services. If you're used to doing `fs.writeFile()`, this should be easy.

[![Node CI](https://github.com/AnandChowdhary/unfs/workflows/Node%20CI/badge.svg)](https://github.com/AnandChowdhary/unfs/actions?query=workflow%3A%22Node+CI%22)
[![Checks](https://badgen.net/github/checks/AnandChowdhary/unfs)](https://github.com/AnandChowdhary/unfs/commits/master)
[![npm version](https://badgen.net/npm/v/unfs)](https://www.npmjs.com/package/unfs)
[![Types](https://badgen.net/npm/types/unfs)](https://www.npmjs.com/package/unfs)
[![Dependencies](https://badgen.net/david/dep/AnandChowdhary/unfs)](https://david-dm.org/AnandChowdhary/unfs)
[![Dev dependencies](https://badgen.net/david/dev/AnandChowdhary/unfs)](https://david-dm.org/AnandChowdhary/unfs)
[![Peer dependencies](https://badgen.net/david/peer/AnandChowdhary/unfs)](https://david-dm.org/AnandChowdhary/unfs)
[![Install size](https://badgen.net/packagephobia/install/unfs)](https://packagephobia.now.sh/result?p=unfs)
[![License](https://badgen.net/github/license/AnandChowdhary/unfs)](./LICENSE)

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

## 📄 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
