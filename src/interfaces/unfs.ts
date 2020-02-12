import {
  IUnfsServiceS3,
  IUnfsServiceAzureStorage,
  IUnfsServiceGoogleCloudStorage,
  IUnfsServiceFirebaseCloudStorage
} from "./services";

export interface IUnfsService {
  service: string;
  auth: {
    [index: string]: any;
  };
}

export type IUnfsConstructor =
  | IUnfsServiceS3
  | IUnfsServiceAzureStorage
  | IUnfsServiceGoogleCloudStorage
  | IUnfsServiceFirebaseCloudStorage;
