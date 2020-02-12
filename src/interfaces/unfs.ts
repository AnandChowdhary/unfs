import {
  IUnfsServiceS3,
  IUnfsServiceAzureStorage,
  IUnfsServiceGoogleCloudStorage,
  IUnfsServiceFirebaseCloudStorage,
  IUnfsServiceLocal
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
  | IUnfsServiceAzureStorage
  | IUnfsServiceGoogleCloudStorage
  | IUnfsServiceFirebaseCloudStorage;