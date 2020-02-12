import { IUnfsService } from "../unfs";

export interface IUnfsServiceS3 extends IUnfsService {
  service: "aws-s3";
  bucket: string;
}

export interface IUnfsServiceAzureStorage extends IUnfsService {
  service: "azure";
}

export interface IUnfsServiceGoogleCloudStorage extends IUnfsService {
  service: "google-cloud";
}

export interface IUnfsServiceFirebaseCloudStorage extends IUnfsService {
  service: "firebase-cloud";
}

export interface IUnfsServiceLocal extends IUnfsService {
  service: "local";
  directory: string;
}
