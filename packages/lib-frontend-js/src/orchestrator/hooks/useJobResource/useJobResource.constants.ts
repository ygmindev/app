import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';

export const JOB_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<JobModel>;
