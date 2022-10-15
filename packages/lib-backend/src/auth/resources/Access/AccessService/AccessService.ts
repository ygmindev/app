import { EntityResourceService } from '@lib/backend/resource/resources/EntityResource/EntityResourceService/EntityResourceService';
import { ACCESS_RESOURCE_NAME } from '@lib/shared/auth/resources/Access/Access.constants';
import type { AccessFormModel, AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import type { AccessServiceModel } from '@lib/shared/auth/resources/Access/AccessService/AccessService.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';

@withContainer({ name: `${ACCESS_RESOURCE_NAME}Service` })
export class AccessService
  extends EntityResourceService<AccessModel, AccessFormModel>({ name: ACCESS_RESOURCE_NAME })
  implements AccessServiceModel {}
