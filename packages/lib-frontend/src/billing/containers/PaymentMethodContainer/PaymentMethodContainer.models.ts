import { type _PaymentMethodContainerPropsModel } from '@lib/frontend/billing/containers/PaymentMethodContainer/_PaymentMethodContainer.models';
import { type PAYMENT_METHOD_MODE } from '@lib/frontend/billing/containers/PaymentMethodContainer/PaymentMethodContainer.constants';

export type PaymentMethodContainerPropsModel = _PaymentMethodContainerPropsModel;

export type PaymentMethodModeModel = `${PAYMENT_METHOD_MODE}`;
