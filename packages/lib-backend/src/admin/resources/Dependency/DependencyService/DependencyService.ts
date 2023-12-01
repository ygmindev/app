import { Dependency } from '#lib-backend/admin/resources/Dependency/Dependency';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { DEPENDENCY_RESOURCE_NAME } from '#lib-shared/admin/resources/Dependency/Dependency.constants';
import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';
import { type DependencyServiceModel } from '#lib-shared/admin/resources/Dependency/DependencyService/DependencyService.models';

@withContainer({ name: `${DEPENDENCY_RESOURCE_NAME}Service` })
export class DependencyService
  extends createEntityResourceService<DependencyModel, DependencyFormModel>({
    Resource: Dependency,
    name: DEPENDENCY_RESOURCE_NAME,
  })
  implements DependencyServiceModel {}
