import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type JobImplementationModel = ResourceImplementationModel<JobModel>;
