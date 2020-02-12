import { UnfsService } from "../interfaces/services/base";
import { IUnfsServiceLocal } from "../interfaces/services/constructor";

export default class LocalService implements UnfsService {
  settings: IUnfsServiceLocal;
  initialized = false;

  constructor(settings: IUnfsServiceLocal) {
    this.settings = settings;
  }

  async initialize() {
    if (this.initialized) return;
    // mkdirp here to initialize class
  }

  async writeFile(fileName: string, contents: any) {
    // TODO use path.join after adding @types/node
    const path = this.settings.directory + "/" + fileName;
    return path;
  }

  async readFile(fileName: string) {
    return fileName;
  }
}
