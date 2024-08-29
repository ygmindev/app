import { type PaymentMethodModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type PaymentArgsModel } from '@lib/shared/billing/utils/PaymentArgs/PaymentArgs.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type IdArgsModel } from '@lib/shared/resource/utils/IdArgs/IdArgs.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type PaymentMethodImplementationModel = Pick<
  EmbeddedResourceImplementationModel<PaymentMethodModel, undefined, UserModel>,
  'getMany'
> & {
  createToken(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, string, PaymentArgsModel, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, string, UserModel>>;

  removeToken(
    input: InputModel<RESOURCE_METHOD_TYPE.REMOVE, boolean, IdArgsModel, UserModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.REMOVE, boolean, UserModel>>;
};
