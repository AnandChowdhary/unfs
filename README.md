# 📁 Unfs

Node.js API like `fs`, but for cloud storage services. If you're used to doing `fs.writeFile()`, this should be easy.

[![Node CI](https://github.com/AnandChowdhary/unfs/workflows/Node%20CI/badge.svg)](https://github.com/AnandChowdhary/unfs/actions?query=workflow%3A%22Node+CI%22)
[![Coverage](https://badgen.net/github/checks/AnandChowdhary/unfs)](https://coveralls.io/github/AnandChowdhary/unfs)
[![Checks](https://badgen.net/coveralls/c/github/AnandChowdhary/unfs)](https://github.com/AnandChowdhary/unfs/commits/master)
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
- [ ] Memory file system
- [x] In memory (for testing only)

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

## ⚒ Configuration

### General

The following constructor properties can be used in all services:

```ts
const fs = new Unfs({
  service: "your-service-here", // Select a service from below
  prefix: "prefix_", // Add prefix to file name before saving
  suffix: "_suffix", // Add Suffix to file name before saving
  softDelete: true // Set to `true` to rename instead of deleting files,
  deletePrefix: "deleted_" // Use with `softDelete` as file prexix
}));
```

### Memory

**Note:** You should only use the Memory service in development, since you'll end up using lots of RAM when storing binary files in memory.

```ts
const fs = new Unfs({
  service: "memory"
}));
```

## 📄 License

[MIT](./LICENSE) © [Anand Chowdhary](https://anandchowdhary.com)
