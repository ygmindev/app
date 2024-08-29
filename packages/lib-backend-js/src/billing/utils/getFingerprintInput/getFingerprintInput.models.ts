import {
  type PaymentMethodFormModel,
  type PaymentMethodModel,
  type PaymentMethodTypeModel,
} from '@lib/shared/billing/resources/PaymentMethod/PaymentMethod.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type GetFingerprintInputParamsModel<
  TType extends PaymentMethodModel,
  TForm extends PaymentMethodFormModel,
> = {
  input: InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, UserModel>;
  type: PaymentMethodTypeModel;
};

export type GetFingerprintInputModel<
  TType extends PaymentMethodModel,
  TForm extends PaymentMethodFormModel,
> = InputModel<RESOURCE_METHOD_TYPE.CREATE, TType, TForm, UserModel>;
