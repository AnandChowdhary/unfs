export interface UnfsService {
  constructor: Function;
  initialized: boolean;

  initialize(): Promise<void>;
  writeFile(filePath: string, content: any): Promise<string>;
  readFile(filePath: string): Promise<any>;
}
