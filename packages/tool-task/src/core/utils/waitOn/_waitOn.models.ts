import { type TaskConfigModel } from '@lib/config/core/task/task.models';
import { type WaitOnResourceTypeModel } from '@tool/task/core/utils/waitOn/waitOn.models';

export type _WaitOnParamsModel = [
  resources: Array<[resource: string, type: WaitOnResourceTypeModel]>,
  options: TaskConfigModel['wait'],
];

export type _WaitOnModel = void;
