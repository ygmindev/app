import type { TaskCliParamsModel } from '@tool/task/core/core.models';

export interface _ServerParamsModel extends Pick<TaskCliParamsModel, 'configFile'> {
  port: string;
  root: string;
}

export type _ServerModel = void;
