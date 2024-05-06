export type CopyParamsModel = {
  excludes?: Array<string>;
  from: string;
  includes?: Array<string>;
  isOverwrite?: boolean;
  overrides?: Record<string, string>;
  to: string;
};
