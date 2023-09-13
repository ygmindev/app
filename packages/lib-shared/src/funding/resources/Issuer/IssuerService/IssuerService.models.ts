import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/funding/resources/Issuer/Issuer.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export type IssuerServiceModel = EntityResourceServiceModel<IssuerModel, IssuerFormModel>;
