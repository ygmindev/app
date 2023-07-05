export type ChildrenParamsModel = [from: string, options?: { isDirectory?: boolean }];

export type ChildrenModel = Array<{
  fullPath: string;
  isDirectory?: boolean;
  lastUpdated: Date;
  name: string;
}>;
