import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type RunPythonParamsModel = AppTaskParamsModel & {
  pathname: string;
  patterns?: Array<string> | string;
};

export type RunPythonModel = void;
