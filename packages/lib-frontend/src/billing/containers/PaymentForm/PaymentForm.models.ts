import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';

export type PaymentFormPropsModel = FormStepPropsModel<OrderFormModel, PaymentFormStepModel>;

export type PaymentFormStepModel = Pick<OrderFormModel, 'paymentMethodId'>;
