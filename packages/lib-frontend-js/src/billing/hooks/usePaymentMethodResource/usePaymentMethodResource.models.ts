import { type UseResourceMethodHookParamsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type PaymentMethodImplementationModel } from '@lib/shared/billing/resources/PaymentMethod/PaymentMethodImplementation/PaymentMethodImplementation.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type UsePaymentMethodResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UsePaymentMethodResourceModel = PaymentMethodImplementationModel;
