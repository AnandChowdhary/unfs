# 📁 Unfs

Node.js API like `fs`, but for cloud storage services. If you're used to doing `fs.writeFile()`, this should be easy.

## 💡 Usage

With TypeScript or ES6 modules:

```ts
import { writeFile } from "unfs";

await fs.init({
  service: "s3",
  bucket: "s3-bucket-name",
  auth: {}
});
const url = await writeFile("message.txt", "Hello, world");
console.log("url", url);
```

With Node.js:

```js
const fs = require("unfs");

fs.init({
  service: "s3",
  bucket: "s3-bucket-name",
  auth: {}
})
  .then(() => fs.writeFile("message.txt", "Hello, world"))
  .then(url => console.log("url", url))
  .catch(error => console.error("error", error));
```
