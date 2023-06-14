import type { AccessFormModel, AccessModel } from '#lib-shared/auth/resources/Access/Access.models';
import type { EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export interface AccessServiceModel
  extends EntityResourceServiceModel<AccessModel, AccessFormModel> {}
