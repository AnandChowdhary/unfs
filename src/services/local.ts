import { UnfsService } from "../interfaces/services/base";
import { IUnfsServiceLocal } from "../interfaces/services/constructor";
import { join } from "path";
import {} from "fs-extra";

export default class LocalService implements UnfsService {
  settings: IUnfsServiceLocal;
  initialized = false;

  constructor(settings: IUnfsServiceLocal) {
    this.settings = settings;
  }

  async initialize() {
    if (this.initialized) return;
  }

  async writeFile(fileName: string, contents: any) {
    const path = join(this.settings.directory, fileName);
    return path;
  }

  async readFile(fileName: string) {
    return fileName;
  }
}
