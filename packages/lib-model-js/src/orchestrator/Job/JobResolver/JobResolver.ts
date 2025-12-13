import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { Job } from '@lib/model/orchestrator/Job/Job.entity';
import { JobImplementation } from '@lib/model/orchestrator/Job/JobImplementation/JobImplementation';
import { type JobResolverModel } from '@lib/model/orchestrator/Job/JobResolver/JobResolver.models';

@withContainer()
@withResolver({ Resource: () => Job })
export class JobResolver
  extends createEntityResourceResolver({
    Resource: () => Job,
    ResourceImplementation: JobImplementation,
    access: { default: ACCESS_LEVEL.PUBLIC },
    name: JOB_RESOURCE_NAME,
  })
  implements JobResolverModel {}
