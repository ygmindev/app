import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type JobImplementationModel = EntityResourceImplementationModel<JobModel>;
