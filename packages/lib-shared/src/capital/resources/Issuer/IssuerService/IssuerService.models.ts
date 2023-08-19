import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/capital/resources/Issuer/Issuer.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';

export type IssuerServiceModel = EntityResourceServiceModel<IssuerModel, IssuerFormModel>;
