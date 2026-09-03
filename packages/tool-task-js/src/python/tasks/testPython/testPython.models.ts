import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type TestPythonParamsModel = AppTaskParamsModel & {
  include?: string;
};

export type TestPythonModel = void;
