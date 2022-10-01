export interface ChildrenParamsModel {
  from: string;
  isDirectory?: boolean;
}

export interface ChildrenModel {
  fullPath: string;
  isDirectory?: boolean;
  lastUpdated: Date;
  name: string;
}
