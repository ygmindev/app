import { type UseResourceMethodHookParamsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type PaymentMethodServiceModel } from '#lib-shared/billing/resources/PaymentMethod/PaymentMethodService/PaymentMethodService.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export type UsePaymentMethodResourceParamsModel = UseResourceMethodHookParamsModel<UserModel>;

export type UsePaymentMethodResourceModel = PaymentMethodServiceModel;
