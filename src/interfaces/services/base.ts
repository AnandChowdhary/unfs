export interface UnfsService {
  constructor: Function;
  initialized: boolean;

  initialize(): Promise<void>;

  /**
   * Create a new file in the service
   * @param filePath - File path with name
   * @param content - File contents (text, JSON, binary, Blob, etc.)
   */
  writeFile(filePath: string, content: any): Promise<string>;

  /**
   * Read a file from the service
   * @param filePath - File path with name
   */
  readFile(filePath: string): Promise<any>;
}
