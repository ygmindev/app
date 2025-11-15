import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { Job } from '@lib/model/orchestrator/Job/Job';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { JobImplementation } from '@lib/model/orchestrator/Job/JobImplementation/JobImplementation';
import { type JobResolverModel } from '@lib/model/orchestrator/Job/JobResolver/JobResolver.models';

@withContainer()
@withResolver({ Resource: () => Job })
export class JobResolver
  extends createResourceResolver({
    Resource: () => Job,
    ResourceImplementation: JobImplementation,
    access: { read: ACCESS_LEVEL.PUBLIC },
    name: JOB_RESOURCE_NAME,
  })
  implements JobResolverModel {}
