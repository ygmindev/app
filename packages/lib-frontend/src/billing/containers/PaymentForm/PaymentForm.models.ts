import { type FormStepPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type OrderFormModel } from '@lib/shared/commerce/resources/Order/Order.models';
import { type EmptyObjectModel } from '@lib/shared/core/core.models';

export type PaymentFormPropsModel = FormStepPropsModel<OrderFormModel, EmptyObjectModel>;
