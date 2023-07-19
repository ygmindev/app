export type RunAllParamsModel = {
  isParallel?: boolean;
  patterns: Array<RegExp | string>;
  tasks?: Array<string>;
};
