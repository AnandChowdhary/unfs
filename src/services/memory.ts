import { UnfsService } from "../interfaces/services/base";
import { IUnfsServiceMemory } from "../interfaces/services/constructor";

export default class MemoryService implements UnfsService {
  settings: IUnfsServiceMemory;
  initialized = false;
  data?: {
    [index: string]: any;
  };

  constructor(settings: IUnfsServiceMemory) {
    this.settings = settings;
  }

  async initialize() {
    if (this.initialized) return;
    this.data = {};
    this.initialized = true;
  }

  async writeFile(fileName: string, contents: any) {
    if (this.data) this.data[fileName] = contents;
    return fileName;
  }

  async readFile(fileName: string) {
    if (this.data && typeof this.data[fileName] !== "undefined")
      return this.data[fileName];
    throw new Error("File not found");
  }
}
