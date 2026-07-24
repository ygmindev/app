import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export const WORKFLOW_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<WorkflowModel>;
