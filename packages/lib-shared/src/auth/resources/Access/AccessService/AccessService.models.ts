import {
  type AccessFormModel,
  type AccessModel,
} from '@lib/shared/auth/resources/Access/Access.models';
import { type ProtectedResourceServiceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResourceService/ProtectedResourceService.models';

export type AccessServiceModel = ProtectedResourceServiceModel<AccessModel, AccessFormModel>;
