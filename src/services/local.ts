import { UnfsService } from "../interfaces/services/base";
import { IUnfsServiceLocal } from "../interfaces/services/constructor";
import { join } from "path";
import { mkdirp, writeFile, readFile } from "fs-extra";

export default class LocalService implements UnfsService {
  settings: IUnfsServiceLocal;
  initialized = false;

  constructor(settings: IUnfsServiceLocal) {
    this.settings = settings;
  }

  async initialize() {
    if (this.initialized) return;
    await mkdirp(this.settings.directory);
    this.initialized = true;
  }

  async writeFile(fileName: string, contents: any) {
    const path = join(this.settings.directory, fileName);
    await writeFile(path, contents);
    return path;
  }

  async readFile(fileName: string) {
    const path = join(this.settings.directory, fileName);
    return (await readFile(path)).toString();
  }
}
