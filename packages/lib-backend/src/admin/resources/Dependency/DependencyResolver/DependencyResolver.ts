import { Dependency } from '#lib-backend/admin/resources/Dependency/Dependency';
import { type DependencyResolverModel } from '#lib-backend/admin/resources/Dependency/DependencyResolver/DependencyResolver.models';
import { DependencyService } from '#lib-backend/admin/resources/Dependency/DependencyService/DependencyService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { DEPENDENCY_RESOURCE_NAME } from '#lib-shared/admin/resources/Dependency/Dependency.constants';
import {
  type DependencyFormModel,
  type DependencyModel,
} from '#lib-shared/admin/resources/Dependency/Dependency.models';

@withContainer()
@withResolver({ Resource: () => Dependency })
export class DependencyResolver
  extends createEntityResourceResolver<DependencyModel, DependencyFormModel>({
    Resource: Dependency,
    ResourceService: DependencyService,
    name: DEPENDENCY_RESOURCE_NAME,
  })
  implements DependencyResolverModel {}
