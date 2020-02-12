import { IUnfsConstructor } from "./interfaces/unfs";

export default class Unfs {
  settings: IUnfsConstructor;

  /**
   * Create a new instance of Unfs
   * @param settings - Configuration object
   */
  constructor(settings: IUnfsConstructor) {
    this.settings = settings;
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
}
