import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export const WORKFLOW_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<WorkflowModel>;
