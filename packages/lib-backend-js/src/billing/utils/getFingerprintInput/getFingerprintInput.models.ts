import {
  type PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '@lib/model/billing/PaymentMethod/PaymentMethod.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type GetFingerprintInputParamsModel<TType extends PaymentMethodModel> = {
  input: ResourceInputModel<RESOURCE_METHOD_TYPE.CREATE, TType, UserModel>;
  type: PaymentMethodTypeModel;
};

export type GetFingerprintInputModel<TType extends PaymentMethodModel> = ResourceInputModel<
  RESOURCE_METHOD_TYPE.CREATE,
  TType,
  UserModel
>;
