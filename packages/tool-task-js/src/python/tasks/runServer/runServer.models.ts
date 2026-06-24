import { type AppTaskParamsModel } from '@tool/task/core/core.models';

export type RunServerParamsModel = AppTaskParamsModel & {
  pathname: string;
};

export type RunServerModel = void;
