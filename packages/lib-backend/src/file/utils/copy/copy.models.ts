export interface CopyParamsModel {
  excludes?: Array<string>;
  from: string;
  isOverwrite?: boolean;
  overrides?: Record<string, string>;
  to: string;
}
