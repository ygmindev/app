import { type UseJobResourceModel } from '@lib/frontend/orchestrator/hooks/useJobResource/useJobResource.models';
import { JOB_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Job/Job.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';

export const useJobResource = (): UseJobResourceModel =>
  useResource<JobModel>({
    ...JOB_RESOURCE_PARAMS,
  });
