import { IUnfsConstructor } from "./interfaces/unfs";
import { UnfsService } from "./interfaces/services/base";
import LocalService from "./services/local";
import {
  IUnfsServiceLocal,
  IUnfsServiceMemory
} from "./interfaces/services/constructor";
import MemoryService from "./services/memory";

export default class Unfs {
  settings: IUnfsConstructor;
  service: UnfsService;

  /**
   * Create a new instance of Unfs
   * @param settings - Configuration object
   */
  constructor(settings: IUnfsConstructor) {
    this.settings = settings;
    if (this.settings.service === "local") {
      this.service = new LocalService(settings as IUnfsServiceLocal);
    } else if (this.settings.service === "memory") {
      this.service = new MemoryService(settings as IUnfsServiceMemory);
    } else {
      throw new Error("Unknown service");
    }
  }

  /**
   * Update the configuration of this Unfs object
   * @param settings - Configuration object
   */
  public configure(settings: IUnfsConstructor) {
    this.settings = settings;
  }

  /**
   * Get the current Unfs configuration
   * @returns Unfs configuration object
   */
  public getSettings() {
    return this.settings;
  }

  private createFileName(filePath: string) {
    if (this.settings.prefix) filePath = `${this.settings.prefix}${filePath}`;
    if (this.settings.suffix) filePath = `${filePath}${this.settings.suffix}`;
    return filePath;
  }

  /**
   * Create a new file in the service
   * @param filePath - File path with name
   * @param content - File contents (text, JSON, binary, Blob, etc.)
   */
  public async writeFile(filePath: string, content: any) {
    filePath = this.createFileName(filePath);
    await this.service.initialize();
    return await this.service.writeFile(filePath, content);
  }

  /**
   * Read a file from the service
   * @param filePath - File path with name
   */
  public async readFile(filePath: string) {
    filePath = this.createFileName(filePath);
    await this.service.initialize();
    return await this.service.readFile(filePath);
  }
}
