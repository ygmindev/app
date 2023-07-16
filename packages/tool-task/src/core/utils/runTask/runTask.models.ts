import { type TaskParamsModel, type TaskResultModel } from '#tool-task/core/core.models';

export type RunTaskParamsModel<TType = undefined> = TaskParamsModel<TType>;

export type RunTaskModel = TaskResultModel;
