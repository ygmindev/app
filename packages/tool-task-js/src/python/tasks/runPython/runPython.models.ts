import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type RunPythonParamsModel = AppTaskParamsModel & {
  pathname: string;
};

export type RunPythonModel = void;
