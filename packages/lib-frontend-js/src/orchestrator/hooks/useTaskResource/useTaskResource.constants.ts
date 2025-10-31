import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type TaskModel } from '@lib/model/orchestrator/Task/Task.models';

export const TASK_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<TaskModel>;
