export type ChildrenParamsModel = {
  from: string;
  isDirectory?: boolean;
};

export type ChildrenModel = {
  fullPath: string;
  isDirectory?: boolean;
  lastUpdated: Date;
  name: string;
};
