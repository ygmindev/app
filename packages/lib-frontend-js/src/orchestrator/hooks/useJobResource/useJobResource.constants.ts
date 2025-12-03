import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';

export const JOB_FIELDS = ['_id'] satisfies GraphqlQueryParamsFieldsModel<JobModel>;
