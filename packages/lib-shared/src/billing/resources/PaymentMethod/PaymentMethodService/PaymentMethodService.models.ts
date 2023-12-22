import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type PaymentMethodServiceModel = Pick<
  EmbeddedResourceServiceModel<PaymentMethodModel, undefined, UserModel>,
  'getMany'
>;
