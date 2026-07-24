import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';

export const PIPELINE_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<PipelineModel>;
