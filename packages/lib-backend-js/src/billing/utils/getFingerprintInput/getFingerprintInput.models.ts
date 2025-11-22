import {
  type PAYMENT_METHOD_TYPE,
  type PaymentMethodModel,
} from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';

export type GetFingerprintInputParamsModel<TType extends PaymentMethodModel> = {
  input: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, UserModel>;
  type: PAYMENT_METHOD_TYPE;
};

export type GetFingerprintInputModel<TType extends PaymentMethodModel> = ResourceInputModel<
  RESOURCE_METHOD_TYPE.CREATE,
  TType,
  UserModel
>;
