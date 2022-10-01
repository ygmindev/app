export interface CopyParamsModel {
  from: string;
  isOverwrite?: boolean;
  overrides?: Record<string, string>;
  to: string;
}
