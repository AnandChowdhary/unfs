import {
  IUnfsServiceS3,
  IUnfsServiceAzureStorage,
  IUnfsServiceGoogleCloudStorage,
  IUnfsServiceFirebaseCloudStorage,
  IUnfsServiceLocal,
  IUnfsServiceMemory
} from "./services/constructor";

export interface IUnfsService {
  service: string;
  prefix?: string;
  suffix?: string;
  softDelete?: boolean;
  auth?: {
    [index: string]: any;
  };
}

export type IUnfsConstructor =
  | IUnfsServiceS3
  | IUnfsServiceLocal
  | IUnfsServiceMemory
  | IUnfsServiceAzureStorage
  | IUnfsServiceGoogleCloudStorage
  | IUnfsServiceFirebaseCloudStorage;
