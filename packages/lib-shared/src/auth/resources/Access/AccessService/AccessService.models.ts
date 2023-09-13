import {
  type AccessFormModel,
  type AccessModel,
} from '#lib-shared/auth/resources/Access/Access.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type AccessServiceModel = EntityResourceServiceModel<AccessModel, AccessFormModel>;
