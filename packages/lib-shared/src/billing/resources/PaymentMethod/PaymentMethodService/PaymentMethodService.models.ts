import { type PaymentMethodModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type PaymentMethodServiceModel = Pick<
  EmbeddedResourceServiceModel<PaymentMethodModel, undefined, UserModel>,
  'getMany'
> & {
  createToken(
    input?: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, undefined>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>>;
};
