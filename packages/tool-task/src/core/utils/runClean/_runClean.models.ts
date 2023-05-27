export interface _RunCleanParamsModel {
  excludes?: Array<string>;
  patterns?: Array<string>;
  root?: string;
}

export type _RunCleanModel = Promise<void>;
