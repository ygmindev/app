import type { TaskParamsModel } from '@tool/task/core/core.models';

export interface RunTaskParamsModel<TType = undefined> extends TaskParamsModel<TType> {}

export type RunTaskModel = Promise<boolean>;
