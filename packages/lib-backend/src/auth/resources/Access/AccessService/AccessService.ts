import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { ACCESS_RESOURCE_NAME } from '#lib-shared/auth/resources/Access/Access.constants';
import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { type AccessServiceModel } from '#lib-shared/auth/resources/Access/AccessService/AccessService.models';

@withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
export class AccessService
  extends createEntityResourceService<AccessModel, AccessFormModel>({ name: ACCESS_RESOURCE_NAME })
  implements AccessServiceModel {}
